import * as Select from '@radix-ui/react-select';
import { Room } from '@prisma/client';
import { useEffect, useMemo, useState } from 'react';
import RoomCreationModal from '../room/RoomCreationModal';

const getRooms = async (): Promise<Room[]> => {
  const roomResponse = await fetch('http://localhost:3000/api/room');
  return await roomResponse.json();
};

const Searchbar: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRooms()
      .then((data) => {
        setRooms(data);
        setLoading(true);
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Select.Root>
      <Select.Trigger className='col-span-2 mr-4 flex w-full items-center gap-2 rounded-md bg-background-grey p-2 font-light'>
        <Select.Icon className='flex h-6 w-6 items-center justify-center rounded bg-gray-300 transition-all ease-in group-hover:bg-primary'>
          💡
        </Select.Icon>
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        <Select.Viewport className='flex flex-col gap-2 rounded-lg bg-white p-2 shadow-lg'>
          <Select.Group>
            {
              rooms.map((room, k) => (
                <Select.Item
                  key={room.id}
                  value={k.toString()}
                  className='group flex w-full cursor-pointer gap-2 rounded-md border border-background-grey bg-white p-2 font-light outline-primary transition-all ease-in hover:bg-gray-50'
                >
                  <Select.ItemIndicator className='flex h-6 w-6 items-center justify-center rounded bg-primary-light transition-all ease-in group-hover:bg-primary'></Select.ItemIndicator>
                  <Select.ItemText className='gap-2 rounded-md bg-background-grey p-2 text-sm font-light'>
                    {room.name}
                  </Select.ItemText>
                </Select.Item>
              ))
              // todo: make outdoor in own group!
              // maybe a small pulse when hovered?
            }
          </Select.Group>
          <Select.Group>
            <Select.Item
              disabled
              onClick={() => console.log('fo')}
              value='addRoom'
              className='w-full cursor-pointer justify-center gap-2 rounded-md bg-primary-light p-2 font-medium  text-primary'
            >
              <Select.ItemIndicator className='flex h-6 w-6 items-center justify-center rounded bg-primary-light transition-all ease-in group-hover:bg-primary'></Select.ItemIndicator>
              <Select.ItemText className=''>
                <RoomCreationModal/>
              </Select.ItemText>
            </Select.Item>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default Searchbar;
