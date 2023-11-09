'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import prisma from '../../prisma/client';
import { LocationType, Plant, Size } from '@prisma/client';
import { auth } from '@/auth';
import camelcaseKeys from 'camelcase-keys';
import { convertDataToPlants } from '@/utils/plantsCommunication';
import { toast } from 'sonner';


// Server Action
export async function createRoom(prevState: any, formData: FormData) {
  console.log("foo!");
  console.log(formData);
  
  const seesion = await auth();
  if (!seesion) {
    return { message: 'Unauthorized' };
  }

  console.log(seesion);
  // const roomSchema = z.object({
  //   roomName: z.string(),
  //   roomLocation: z.string(),
  //   roomColor: z.string(),
  //   roomSize: z.string(),
  //   userId: z.string(),
  //   plants: z.array(z.unknown()),
  // });

  // try {
  //   const roomData = roomSchema.parse({
  //     roomName: formData.get('roomName'),
  //     roomLocation: formData.get('roomType'),
  //     roomColor: formData.get('roomIconColor'),
  //     roomSize: formData.get('roomSize'),
  //     userId: seesion!.user.id,
  //     plants: [],
  //   });

  //   const room = await prisma.room.create({
  //     data: {
  //       roomName: roomData.roomName,
  //       roomColor: roomData.roomColor,
  //       userId: seesion.user.id,
  //       roomSize: roomData.roomSize as Size,
  //       roomLocation: roomData.roomLocation.toUpperCase() as LocationType,
  //     },
  //   });

  //   // onValid Spawn toast!
  //   // todo: sppoooner
  //   // Close with pending?
  //   return revalidatePath('/');
  // } catch (e) {
  //   console.error(e);
  //   return { message: 'Failed to create' };
  // }
}

export async function getExternalPlants() {
  try {
    const response = await fetch(
      `http://trefle.io/api/v1/plants?token=${process.env.TREFLE_API_TOKEN}&order[common_name]=asc&page=1`
    );
    const plantData = await response.json();

    return { data: convertDataToPlants(plantData.data) };
  } catch (error) {
    console.error('Error on getExternalPlants: ', error);
    return { data: [] };
  }
}

export async function getExternalPlantsSearch(searchQuery: string) {
  try {
    /**
     * Accidentaly fires first loaded needs Issue!
     */
    if (searchQuery.trim() === '') {
      return getExternalPlants();
    }

    const response = await fetch(
      `http://trefle.io/api/v1/plants/search?q=${searchQuery}&token=${process.env.TREFLE_API_TOKEN}&order[common_name]=asc&page=1`
    );
    const plantData = await response.json();

    // catch error from External API (trefle.io)
    if (plantData.error) {
      throw new Error(plantData.message);
    }
    return { data: convertDataToPlants(plantData.data) } as { data: Plant[] };
  } catch (error) {
    return { data: [] };
  }
}
