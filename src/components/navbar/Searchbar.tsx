import * as Select from '@radix-ui/react-select';
import { LocationType, Room } from '@prisma/client';
import { useEffect, useState } from 'react';
import RoomCreationModal from '../room/RoomCreationModal';
import _ from 'lodash';

const getRooms = async (): Promise<Record<LocationType, Room[]>> => {
  const roomResponse = await fetch('http://localhost:3000/api/room');
  const rooms = await roomResponse.json();
  return _.groupBy(rooms, 'roomLocation') as Record<LocationType, Room[]>;
};

const Searchbar: React.FC = () => {
  const [rooms, setRooms] = useState<Record<LocationType, Room[]>>();

  useEffect(() => {
    getRooms()
      .then((data: Record<LocationType, Room[]>) => {
        setRooms(data);
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error);
      });
  }, []);

  return (
    <Select.Root>
      <Select.Trigger className='col-span-2 mr-4 flex w-full items-center gap-2 rounded-md bg-background-grey p-2 font-light focus-visible:outline  focus-visible:outline-2 focus-visible:outline-primary data-[placeholder]:text-gray-600 '>
        <Select.Icon className='flex h-6 w-6 items-center justify-center rounded bg-primary-light transition-all ease-in group-hover:bg-primary'>
          🌵
        </Select.Icon>
        <Select.Value placeholder='Select a room...' />
      </Select.Trigger>
      <Select.Content>
        <Select.Viewport className='flex flex-col gap-2 rounded-lg bg-white p-2 shadow-lg'>
          {rooms &&
            Object.entries(rooms as Record<LocationType, Room[]>).map(
              ([roomType, rooms], i) => (
                <Select.Group
                  key={roomType.toString()}
                  className='flex flex-col gap-1'
                >
                  <Select.Label className='text-sm'>
                    {_.capitalize(roomType)}
                  </Select.Label>
                  {rooms.map((room) => (
                    <Select.Item
                      key={room.id}
                      value={i.toString()}
                      className='group flex w-full cursor-pointer gap-2 rounded-md border border-background-grey bg-white p-2 font-light transition-colors ease-in hover:bg-gray-50 focus-visible:outline  focus-visible:outline-2 focus-visible:outline-primary'
                    >
                      <div className='flex h-6 w-6 items-center justify-center rounded bg-primary-light transition-all ease-in group-hover:bg-primary'></div>
                      <Select.ItemText className='gap-2 rounded-md bg-background-grey p-2 text-sm font-light'>
                        {room.roomName}
                      </Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Group>
              )
            )}
          <Select.Group>
            <Select.Item
              disabled
              value='addRoom'
              className='w-full cursor-pointer justify-center gap-2 rounded-md bg-primary-light p-2 font-medium  text-primary'
            >
              <Select.ItemIndicator className='flex h-6 w-6 items-center justify-center rounded bg-primary-light transition-all ease-in group-hover:bg-primary'></Select.ItemIndicator>
              <Select.ItemText>
                <RoomCreationModal />
              </Select.ItemText>
            </Select.Item>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default Searchbar;
