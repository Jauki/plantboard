import * as Select from '@radix-ui/react-select';
import { LocationType, Room } from '@prisma/client';
import React, { ReactNode, useEffect, useState } from 'react';
import RoomCreationModal from '../room/RoomCreationModal';
import _ from 'lodash';
import { useQuery } from '@tanstack/react-query';
import { useRoom } from '@/context/RoomContext';
import { v4 as uuidv4 } from 'uuid';

export const getRooms = async (): Promise<Record<LocationType, Room[]>> => {
  // React Querry get rooms from Querry
  const roomResponse = await fetch('/api/room');
  const rooms = await roomResponse.json();

  return rooms.length == 0
    ? {
        INDOOR: [],
        OUTDOOR: [],
      }
    : (_.groupBy(rooms, 'roomLocation') as Record<LocationType, Room[]>);
};

const convertRooms = (rooms: Record<LocationType, Room[]>) => {
  return _.filter(
    Object.entries(rooms as Record<LocationType, Room[]>).map(
      ([roomType, rooms], i) => ({
        roomType,
        rooms,
        index: i,
      })
    ),
    ({ rooms }) => rooms.length >= 1
  );
};

const Searchbar: React.FC = () => {
  const { data: rooms } = useQuery({
    queryKey: ['rooms'],
    queryFn: () => getRooms(),
  });

  const { setRoom } = useRoom();

  /**
   * Should be the normal function -> pfuschFunctioncomming
   * Should be resolved if the Github Discussion is resolved!
   * https://github.com/radix-ui/primitives/discussions/2539
   * @deprecated
   */
  const handleRoomChange = (newRoom: Room) => {
    setRoom(newRoom);
  };

  /**
   * Should be the normal function -> pfuschFunctioncomming
   * Should be resolved if the Github Discussion is resolved!
   * Name should be unique!
   * @param newRoom -> "{roomType}_{roomName}"
   * @deprecated
   */
  const handleRoomChangePfusch = (newRoom: string) => {
    const roomName = newRoom.split('_')[1] as string;
    const roomsConverted = convertRooms(rooms!);

    const foundRoom = roomsConverted
      .map((room) => room.rooms.find((a) => a.roomName === roomName))
      .find((a) => a !== undefined);

    if (foundRoom) {
      setRoom(foundRoom);
    }
  };

  return (
    <Select.Root onValueChange={handleRoomChangePfusch}>
      <Select.Trigger className='col-span-2 mr-4 flex w-full items-center gap-2 rounded-md bg-background-grey p-2 font-light focus-visible:outline  focus-visible:outline-2 focus-visible:outline-primary data-[placeholder]:text-gray-600 '>
        <Select.Icon className='flex h-6 w-6 items-center justify-center rounded bg-primary-light transition-all ease-in group-hover:bg-primary'>
          🌵
        </Select.Icon>
        <Select.Value placeholder='Select a room...' />
      </Select.Trigger>
      <Select.Content>
        <Select.Viewport className='flex flex-col gap-2 rounded-lg bg-white p-2 shadow-lg'>
          {rooms
            ? convertRooms(rooms).map(({ roomType, rooms, index }) => (
                <Select.Group key={uuidv4()} className='flex flex-col gap-1'>
                  <Select.Label className='select-none text-sm'>
                    {_.capitalize(roomType)}
                  </Select.Label>
                  {rooms.map((room, k) => (
                    <Select.Item
                      key={room.id}
                      value={`${roomType}_${room.roomName}`}
                      onPointerDown={(event) => event.preventDefault()}
                      className='group flex w-full cursor-pointer gap-2 rounded-md border border-background-grey bg-white p-2 font-light transition-colors ease-in hover:bg-gray-50 focus-visible:outline  focus-visible:outline-2 focus-visible:outline-primary'
                    >
                      <div className='flex h-6 w-6 items-center justify-center rounded bg-primary-light transition-all ease-in group-hover:bg-primary'></div>
                      <Select.ItemText className='gap-2 rounded-md bg-background-grey p-2 text-sm font-light'>
                        {room.roomName}
                      </Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Group>
              ))
            : null}
          <Select.Group className='flex w-full flex-col gap-1'>
            {rooms?.INDOOR?.length === 0 && rooms?.OUTDOOR?.length === 0 && (
              <Select.Item
                value='null'
                className='group flex w-full cursor-pointer gap-2 rounded-md border border-background-grey bg-white p-2 font-light transition-colors ease-in hover:bg-gray-50 focus-visible:outline  focus-visible:outline-2 focus-visible:outline-primary'
              >
                <div className='flex h-6 w-6 items-center justify-center rounded bg-primary-light transition-all ease-in group-hover:bg-primary'>
                  🌵
                </div>
                <Select.ItemText className='gap-2 rounded-md bg-background-grey p-2 text-sm font-light'>
                  Select a room...
                </Select.ItemText>
              </Select.Item>
            )}
            <RoomCreationModal />
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default Searchbar;
