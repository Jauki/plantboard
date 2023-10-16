import * as Select from '@radix-ui/react-select';
import { ChevronDown } from 'react-feather';
import { Room } from '@prisma/client';
import { useEffect, useMemo, useState } from 'react';

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

  return loading && (
    
    <Select.Root>
      <Select.Trigger className='flex font-light gap-2 rounded-md bg-background-grey p-2 items-center col-span-2'>
        <Select.Icon className='flex h-6 w-6 items-center justify-center rounded bg-gray-300 transition-all ease-in group-hover:bg-primary' >
          💡
        </Select.Icon>
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        <Select.ScrollUpButton>
          <ChevronDown />
        </Select.ScrollUpButton>
        <Select.Viewport className='bg-white p-2 rounded-lg shadow-lg flex-col flex gap-2'>
        <Select.Group>{
          rooms.map((room, k) => (
                <Select.Item
                  key={room.id}
                  value={k.toString()}
                  className='group font-light flex w-full cursor-pointer gap-2 rounded-md border border-background-grey bg-white p-2 outline-primary transition-all ease-in hover:bg-gray-50'
                >
                  <Select.ItemIndicator className='flex h-6 w-6 items-center justify-center rounded bg-primary-light transition-all ease-in group-hover:bg-primary'>
                    
                  </Select.ItemIndicator>
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
                  onClick={() => console.log("fo")}
                  value="addRoom"
                  className='group gap-2 bg-primary-light font-medium justify-center p-2 flex w-full cursor-pointer text-primary  rounded-md'
                >
                  <Select.ItemText className='rounded-md bg-background-grey text-sm'>
                    add Room
                  </Select.ItemText>
                </Select.Item>
        </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
    
  );
};

export default Searchbar;
