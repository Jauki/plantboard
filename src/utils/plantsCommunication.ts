import { Plant } from '@prisma/client';
import * as _ from 'lodash';
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

function levenshteinDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + (a[i - 1] !== b[j - 1] ? 1 : 0),
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1
        );
      }
    }
  }

  return dp[m][n];
}

export function filterAndRankApiResults(
  userInput: string,
  apiResults: string[],
  threshold: number,
  limit: number
): string[] {
  const resultsWithSimilarity = apiResults.map((result) => ({
    result,
    similarity: calculateSimilarity(userInput, result),
  }));

  const filteredResults = resultsWithSimilarity.filter(
    (result) => result.similarity >= threshold
  );

  const sortedResults = _.orderBy(filteredResults, 'similarity', 'desc').slice(
    0,
    limit
  );

  return sortedResults.map((result) => result.result);
}

// Function to calculate similarity ratio based on Levenshtein distance
function calculateSimilarity(a: string, b: string): number {
  const distance = levenshteinDistance(a, b);
  const maxLength = Math.max(a.length, b.length);
  return 1 - distance / maxLength;
}
