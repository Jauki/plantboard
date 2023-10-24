'use server';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export async function createRoom(prevState: any, formData: FormData) {
  const seesion = await getServerSession();
  console.log(seesion?.user);
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
      roomLocation: formData.get('roomLocation'),
      roomColor: formData.get('roomIconColor'),
      roomSize: formData.get('roomSize'),
      userId: seesion?.user?.email,
      plants: [], 
    });

    
    // onValid Spawn toast!
    return revalidatePath('/');
  } catch (e) {
    return { message: 'Failed to create' };
  }
}
