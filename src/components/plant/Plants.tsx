'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getExternalPlants } from '@/app/actions';

export default function Plants({ plants }: { plants: any }) {
  const { data, error, isFetched } = useQuery({
    queryKey: ['plants'],
    queryFn: getExternalPlants,
    initialData: plants,
  });

  console.log(data);

  return (
    <div className='col-span-8 grid grid-cols-10'>
      {data.data.map((plantData: any) => (
        <Plant
          id={plantData.id}
          common_name={plantData.common_name}
          image_url={plantData.image_url}
          scientific_name={plantData.scientific_name}
        />
      ))}
    </div>
  );
}

const Plant = ({
  id,
  common_name,
  image_url,
  scientific_name,
}: {
  id: string;
  common_name: string;
  image_url: string;
  scientific_name: string;
}) => {
  return (
    <div className='flex hover:bg-gray-50 cursor-pointer flex-col aspect-auto rounded-lg p-3' key={id}>
      <div className='relative mb-2 w-full aspect-square rounded-lg'>
      <Image
        fill
        src={image_url}
        className='rounded-lg'
        alt={scientific_name}
      ></Image>
      </div>
      <div className='flex flex-col'>
        <div className='text-lg leading-tight font-medium'>{common_name}</div>
        <div className='text-xs text-foreground-grey'>{scientific_name}</div>
      </div>
      
    </div>
  );
};
