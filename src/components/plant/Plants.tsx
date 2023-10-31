'use client';

import Image from 'next/image';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { useQuery } from '@tanstack/react-query';
import { getExternalPlants } from '@/app/actions';

export default function Plants({ plants }: { plants: any }) {
  const { data, error, isFetched } = useQuery({
    queryKey: ['plants'],
    queryFn: getExternalPlants,
    initialData: plants,
  });


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
    <ContextMenu.Root>
      <ContextMenu.Trigger
        className='flex aspect-auto cursor-pointer flex-col rounded-lg p-3 hover:bg-gray-50'
        key={id}
      >
        <div className='relative mb-2 aspect-square w-full rounded-lg'>
          <Image
            fill
            quality={50}
            src={image_url}
            className='rounded-lg'
            alt={scientific_name}
          ></Image>
        </div>
        <div className='flex flex-col'>
          <div className='text-lg font-medium leading-tight'>{common_name}</div>
          <div className='text-xs text-foreground-grey'>{scientific_name}</div>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>

      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};
