'use server';

import { z } from 'zod';
import prisma from '../../prisma/client';
import { LocationType, Plant, Size } from '@prisma/client';
import { auth } from '@/auth';
import {
  convertDataToPlants,
  filterAndRankApiResults,
} from '@/utils/plantsCommunication';
import { QueryClient } from '@tanstack/react-query';
import { FormErrorResponse, FormSuccessResponse } from '@/types/general';

export async function createRoom(
  prevState: any,
  formData: FormData
): Promise<FormSuccessResponse | FormErrorResponse> {
  const queryClient = new QueryClient();
  const seesion = await auth();
  if (!seesion) {
    return { success: false, toast: 'Unauthorized, please login!' };
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
        roomLocation: roomData.roomLocation.toUpperCase() as LocationType,
      },
    });

    queryClient.invalidateQueries({ queryKey: ['rooms'] });

    return {
      success: true,
      toast: `You have successfully added ${roomData.roomName}!`,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      toast: 'Ooops! An error happend!',
    };
  }
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

export async function recommendExternalPlantsSearch(searchQuery: string) {
  try {
    /**
     * Accidentaly fires first loaded needs Issue!
     */
    const response = await fetch(
      `http://trefle.io/api/v1/plants/search?q=${searchQuery}&token=${process.env.TREFLE_API_TOKEN}&order[common_name]=asc&page=1`
    );
    const plantData = await response.json();

    // catch error from External API (trefle.io)
    if (plantData.error) {
      throw new Error(plantData.message);
    }
    // maybe filter here once more
    const data = convertDataToPlants(plantData.data);

    const filteredNames =
      filterAndRankApiResults(searchQuery, data, 0.3, 5) || [];

    return {
      data: filteredNames,
    } as {
      data: Partial<Plant>[];
    };
  } catch (error) {
    return { data: [] };
  }
}
export async function recommendExternalSpeciesSearch(searchQuery: string) {
  try {
    /**
     * Accidentaly fires first loaded needs Issue!
     */
    const response = await fetch(
      `http://trefle.io/api/v1/species/search?q=${searchQuery}&token=${process.env.TREFLE_API_TOKEN}&order[common_name]=asc&page=1`
    );
    const plantData = await response.json();

    // catch error from External API (trefle.io)
    if (plantData.error) {
      throw new Error(plantData.message);
    }
    // maybe filter here once more
    const data = convertDataToPlants(plantData.data);

    const filteredNames =
      filterAndRankApiResults(searchQuery, data, 0.3, 5, true) || [];

    return {
      data: filteredNames,
    } as {
      data: Partial<Plant>[];
    };
  } catch (error) {
    return { data: [] };
  }
}

export async function createPlant(prevState: any, formData: FormData) {
  const queryClient = new QueryClient();
  const seesion = await auth();
  if (!seesion) {
    return { success: false, toast: 'Unauthorized, please login!' };
  }

  // todo: implement state handler
  // Without state it is all the rooms combined!

  try {
    const plantData = {
      name: formData.get('plantname'),
      familyCommonName: formData.get('plantspecies'),
      height: formData.get('size'),
      sunlight: formData.get('roomSize'),
      waterFrequency: formData.get('waterFrequency'),
    } as Plant;

    // please make a zod that checks null values

    const plant = await prisma.plant.create({
      data: {
        name: plantData.name!,
        familyCommonName: plantData.familyCommonName,
        height: Number(plantData.height == null ? '0' : plantData.height),
        sunlight: plantData.sunlight,
        waterFrequency: plantData.waterFrequency!,
      },
    });

    queryClient.invalidateQueries({ queryKey: ['rooms'] });

    return {
      success: true,
      toast: `Successfull creation of ${plant.name}`,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      toast: 'Ooops! An error happend!',
    };
  }
}
