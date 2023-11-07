'use client';

import Image from 'next/image';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { ChevronRight } from 'react-feather';
import { useEffect, useState } from 'react';
import { Plant, Room } from '@prisma/client';
import Searchbar from './Searchbar';
import { getExternalPlantsSearch } from '@/server/actions';
import { useQuery } from '@tanstack/react-query';

const getRooms = async (): Promise<Room[]> => {
  try {
    const response = await fetch('/api/room');
    if (!response.ok) {
      throw new Error('Failed to fetch rooms');
    }
    const rooms: Room[] = await response.json();
    return rooms;
  } catch (error) {
    console.error('Error fetching rooms:', error);
    throw error;
  }
};

const putPlantOnWishlist = async (plant: Partial<Plant>) => {
  try {
    const response = await fetch('/api/plant/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plant),
    });
    if (!response.ok) {
      console.log(response);
      throw new Error('Failed to add plant to wishlist');
    }
  } catch (error) {
    console.error('Error adding plant to wishlist:', error);
    throw error;
  }
};

export default function Plants({ plants }: { plants: Plant[] }) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [rooms, setRooms] = useState<Room[] | null>(null);
  const { data, error, isFetched } = useQuery({
    queryKey: ['exploredPlants', searchQuery],
    queryFn: () => getExternalPlantsSearch(searchQuery),
    initialData: {data: plants},
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    getRooms()
      .then((room: Room[]) => {
        setRooms(room);
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error);
      });
  }, []);

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      <div className='col-span-8 grid grid-cols-10'>
        {data.data.length !== 0 ? (
          data.data.map((plantData: Plant, k: number) => (
            <Plant key={k.toString(23)} rooms={rooms!} plant={plantData} />
          ))
        ) : (
          <div className='col-span-4'>
            No plants found that are named: {searchQuery}
          </div>
        )}
      </div>
    </>
  );
}

const Plant = ({ rooms, plant }: { rooms: Room[] | null; plant: Plant }) => {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger
        className='flex aspect-auto cursor-pointer flex-col rounded-lg p-3 hover:bg-gray-50'
        key={plant.id.toString()}
      >
        <div className='relative mb-2 aspect-square h-auto w-auto bg-white'>
          {plant.imageUrl ? (
            <Image
              sizes='(max-width: 768px) 100vw, 33vw'
              fill
              quality={20}
              priority={false}
              src={plant.imageUrl}
              className='rounded-lg'
              alt={plant.name}
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
                        className='hover-bg-primary-light hover-text-primary data-disabled:pointer-events-none group relative flex cursor-pointer select-none items-center rounded-md py-1 pl-6 pr-2 text-sm leading-none outline-none transition-colors ease-in'
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
