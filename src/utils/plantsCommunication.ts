import { Plant } from '@prisma/client';
import camelcaseKeys from 'camelcase-keys';

export const convertDataToPlants = (data: any[]): Plant[] => {
  return data.map((plantData) => {
    const camelCasedPlantData = camelcaseKeys(plantData);

    return {
      id: camelCasedPlantData.id,
      name: camelCasedPlantData.commonName || '', // Convert commonName to name
      author: camelCasedPlantData.author,
      bibliography: camelCasedPlantData.bibliography,
      family: camelCasedPlantData.family,
      familyCommonName: camelCasedPlantData.familyCommonName,
      genus: camelCasedPlantData.genus,
      genusId: camelCasedPlantData.genusId,
      imageUrl: camelCasedPlantData.imageUrl,
    } as Plant;
  });
};
