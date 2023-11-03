import { getServerSession } from 'next-auth';
import prisma from '../../../../../prisma/client';
import { NextRequest } from 'next/server';
import { Plant } from '@prisma/client';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email },
      include: {
        rooms: true,
      },
    });
    const wishlist = await prisma.wishlist.findUnique({
      where: { userId: user?.id },
      include: {
        plants: true,
      },
    });

    return wishlist
      ? new Response(JSON.stringify(wishlist))
      : new Response('No wishlist', { status: 404 });
  } catch (e) {
    return new Response('Unauthenticated' + e, { status: 403 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    let wishlist = await prisma.wishlist.findUnique({
      where: { userId: user?.id },
      include: {
        plants: true,
      },
    });

    if (wishlist == null) {
      wishlist = await prisma.wishlist.create({
        data: {
          userId: user?.id!,
        },
        include: {
          plants: true,
        },
      });
    }

    const partialPlant = (await request.json()) as Partial<Plant>;
    delete partialPlant.id;
    // todo: please strictly cut away overhead fields
    const plant: Plant = {
      ...partialPlant,
    } as Plant;
    
    plant.isOnWishlist = true;

    const updatedWishlist = await prisma.wishlist.update({
      where: {
        userId: user?.id!,
      },
      data: {
        plants: {
          create: plant as Plant,
        },
      },
      include: {
        plants: true,
      },
    });

    return updatedWishlist
      ? new Response(JSON.stringify(updatedWishlist))
      : new Response('No wishlist', { status: 404 });
  } catch (e) {
    console.error(e);
    return new Response('Unauthenticated' + e, { status: 403 });
  }
}
