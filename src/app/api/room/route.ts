import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '../../../../prisma/client';

/**
 * Gets the rooms of a person
 * @param request
 * @param param1
 * @returns
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // I don't need to actually verify, bc middleware should do this!
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
    include: {
      rooms: true,
    },
  });
  return user?.rooms
    ? new Response(JSON.stringify(user.rooms))
    : new Response('No rooms', { status: 404 });
}
