'use server';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { authOptions } from './api/auth/[...nextauth]/route';
import prisma from '../../prisma/client';
import { LocationType, Size } from '@prisma/client';

export async function createRoom(prevState: any, formData: FormData) {
  // Authorization Stuff
  const seesion = await getServerSession(authOptions);
  if (!seesion) {
    return { message: 'Unauthorized' };
  }

  const roomSchema = z.object({
    roomName: z.string(),
    roomLocation: z.string(),
    roomColor: z.string(),
    roomSize: z.string(),
    userId: z.string(),
    plants: z.array(z.unknown()),
  });


  try {
    const roomData = roomSchema.parse({
      roomName: formData.get('roomName'),
      roomLocation: formData.get('roomType'),
      roomColor: formData.get('roomIconColor'),
      roomSize: formData.get('roomSize'),
      userId: seesion!.user.id,
      plants: [],
    });

    const room = await prisma.room.create({
      data: {
        roomName: roomData.roomName,
        roomColor: roomData.roomColor,
        userId: seesion.user.id,
        roomSize: roomData.roomSize as Size,
        roomLocation: (roomData.roomLocation).toUpperCase() as LocationType,
      },
    });
    
    // onValid Spawn toast!
    // Close with pending?
    return revalidatePath('/');
  } catch (e) {
    console.error(e);
    return { message: 'Failed to create' };
  }
}
