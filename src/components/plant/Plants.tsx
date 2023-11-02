'use client';

import Image from 'next/image';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getExternalPlants, getExternalPlantsSearch } from '@/app/actions';
import { ChevronRight } from 'react-feather';
import { useEffect, useState } from 'react';
import { Plant, Room } from '@prisma/client';
import Searchbar from './Searchbar';
import axiosClient from '@/utils/axios';
import camelcaseKeys from 'camelcase-keys';

const getRooms = async (): Promise<Room[]> => {
  const roomResponse = await fetch('http://localhost:3000/api/room');
  const rooms = await roomResponse.json();
  return rooms;
};

export default function Plants({ plants }: { plants: any }) {
  const [rooms, setRooms] = useState<Room[]>();
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { data, error, isFetched } = useQuery({
    queryKey: ['plants', searchQuery],
    queryFn: () => getExternalPlantsSearch(searchQuery),
    initialData: plants,
  });

  const handleSearch = (query: string) => {
    if (query) {
      setSearchQuery(query);
    }
  };

  useEffect(() => {
    getRooms()
      .then((data: Room[]) => {
        setRooms(data);
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error);
      });
  }, []);

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      <div className='col-span-8 grid grid-cols-10'>
        {data.data &&
          data.data.map((plantData: any, k: number) => {
            plantData.name = plantData.common_name;
            return (
              <Plant
                key={k.toString(23)}
                rooms={rooms!}
                plant={camelcaseKeys(plantData)}
              />
            );
          })}
      </div>
    </>
  );
}
/**
 *
 * @param plant
 */
const putPlantOnWishlist = async (plant: Partial<Plant>) => {
  const wishlist = await fetch('http://localhost:3000/api/plant/wishlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plant),
  });
};

const Plant = ({ rooms, plant }: { rooms: Room[]; plant: Partial<Plant> }) => {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger
        className='flex aspect-auto cursor-pointer flex-col rounded-lg p-3 hover:bg-gray-50'
        key={plant.id}
      >
        <div className='relative mb-2 aspect-square w-full rounded-lg bg-primary'>
          {plant.imageUrl ? (
            <Image
              fill
              quality={20}
              priority={false}
              src={plant.imageUrl}
              className='rounded-lg'
              alt={plant.name!}
            />
          ) : null}
        </div>
        <div className='flex flex-col'>
          <div className='text-lg font-medium leading-tight'>{plant.name}</div>
          <div className='text-xs text-foreground-grey'>{plant.family}</div>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className='min-w-[220px] overflow-hidden rounded-md bg-white p-2 shadow-md'>
          <ContextMenu.Item
            onClick={() => putPlantOnWishlist(plant)}
            className='group relative flex cursor-pointer select-none items-center rounded-md py-1 pl-6 pr-2 text-sm leading-none outline-none transition-colors ease-in hover:bg-primary-light hover:text-primary data-[disabled]:pointer-events-none'
          >
            Add to Wishlist{' '}
            <div className='ml-auto pl-5 group-data-[highlighted]:text-primary'>
              ⌘+N
            </div>
          </ContextMenu.Item>
          <ContextMenu.Item className='group relative flex cursor-pointer select-none items-center rounded-md py-1 pl-6 pr-2 text-sm leading-none outline-none transition-colors ease-in hover:bg-primary-light hover:text-primary data-[disabled]:pointer-events-none'>
            Close{' '}
            <div className='ml-auto pl-5 group-data-[highlighted]:text-primary'>
              ESC
            </div>
          </ContextMenu.Item>

          <ContextMenu.Sub>
            <ContextMenu.SubTrigger className='relative flex cursor-pointer select-none  items-center rounded-md py-1 pl-6 pr-2 text-sm text-sm leading-none outline-none transition-colors ease-in hover:bg-primary-light  hover:text-primary data-[disabled]:pointer-events-none'>
              Add to Room
              <div className='ml-auto pl-5'>
                <ChevronRight size={16} />
              </div>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent className='min-w-[220px] overflow-hidden rounded-md bg-white p-2 shadow-md'>
                {rooms
                  ? rooms.map((room, k) => (
                      <ContextMenu.Item
                        key={k}
                        className='group relative flex cursor-pointer select-none items-center rounded-md py-1 pl-6 pr-2 text-sm leading-none outline-none transition-colors ease-in hover:bg-primary-light hover:text-primary data-[disabled]:pointer-events-none'
                      >
                        {room.roomName}
                      </ContextMenu.Item>
                    ))
                  : null}
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};
