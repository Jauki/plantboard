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
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error);
        setLoading(false);
      });
  }, []);

  return (
    
    <Select.Root>
      <Select.Trigger className='flex font-light  gap-2 rounded-md bg-background-grey p-2 items-center col-span-2'>
      <Select.Icon className='flex h-6 w-6 items-center justify-center rounded bg-gray-300 transition-all ease-in group-hover:bg-primary'>
        💡
      </Select.Icon>
      <Select.Value />
 
      </Select.Trigger>
      <Select.Content>
        <Select.ScrollUpButton>
          <ChevronDown />
        </Select.ScrollUpButton>
        <Select.Viewport className='className="bg-white rounded-lg shadow-lg"'>
        <Select.Group>{
          rooms.map((room) => (
                <Select.Item
                  key={room.id}
                  value={room.id.toString()}
                  className='group font-light flex w-full cursor-pointer gap-2 rounded-md border border-background-grey bg-white p-2 outline-primary transition-all ease-in hover:bg-gray-50'
                >
                  <Select.ItemIndicator className='flex h-6 w-6 items-center justify-center rounded bg-primary-light transition-all ease-in group-hover:bg-primary'>
                    🌵
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
                  value="foo"
                  className='group font-light justify-center flex w-full cursor-pointer gap-2 rounded-md border border-background-grey bg-white p-2 outline-primary transition-all ease-in hover:bg-gray-50'
                >
                  <Select.ItemIndicator className='flex h-6 w-6 items-center justify-center rounded bg-gray-200 transition-all ease-in group-hover:bg-primary'>
                    ➕
                  </Select.ItemIndicator>
                  <Select.ItemText className='gap-2 rounded-md bg-background-grey p-2 text-sm font-light'>
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


/**
     <Select.Icon className='flex text-foreground-grey justify-center items-center place-self-end'>
          <ChevronDown />
      </Select.Icon>
 * <div className='relative col-span-2 flex gap-2 rounded-md bg-background-grey p-2 font-normal'>
      <Select.Root>
        <Select.Trigger className='flex h-6 w-6 items-center justify-center rounded bg-primary-light'>
          🪴
        </Select.Trigger>
        <input
          className='w-full border-none bg-transparent p-0 font-light text-black focus:ring-0'
          placeholder='Living Room'
        />
        <Select.Trigger className='text-foreground-grey'>
          <ChevronDown />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content sideOffset={0} className='absolute top-0' id='foo'>
            {loading ? (
              <div className='h-10 w-20 bg-red-700' />
            ) : (
             
              rooms.map((room) => (
                <Select.Item
                  key={room.id}
                  value={room.id.toString()}
                  className='group flex w-96 cursor-pointer gap-2 rounded-md border border-background-grey bg-white p-2 outline-primary transition-all ease-in hover:bg-gray-50'
                >
                  <Select.ItemIndicator className='flex h-6 w-6 items-center justify-center rounded bg-primary-light transition-all ease-in group-hover:bg-primary'>
                    🌵
                  </Select.ItemIndicator>
                  <Select.ItemText className='gap-2 rounded-md bg-background-grey p-2 text-sm font-light'>
                    {room.name}
                  </Select.ItemText>
                </Select.Item>
              ))
            )}
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
 */