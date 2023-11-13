import { recommendExternalPlantsSearch } from '@/server/actions';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { number } from 'zod';

export const PlantNameInput = () => {
  const [recommendation, setRecommendation] = useState<string>('');
  const { data, isFetched } = useQuery({
    queryKey: ['externalPlants', recommendation],
    queryFn: () => recommendExternalPlantsSearch(recommendation),
  });

  return (
    <div className='relative'>
      <input
        type='text'
        name='plantname'
        value={recommendation}
        onChange={(e) => setRecommendation(e.target.value)}
        className={`focus:border-1 w-full rounded-md border border-background-grey px-2 py-1 transition-all focus:border-background-grey focus:outline-2 focus:outline-primary focus:ring-0`}
      />
      {data?.data.length !== 0 ? (
        <div className='absolute flex h-auto w-full flex-col gap-1 rounded-md bg-white p-2 shadow-md'>
          {data?.data.map((plantName: string, k: number) => (
            <div
              className='cursor-pointer rounded-sm px-2 py-1 hover:bg-primary hover:bg-opacity-10 hover:text-primary '
              key={plantName + k + ''}
              onClick={() => setRecommendation(plantName)}
            >
              {plantName}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
