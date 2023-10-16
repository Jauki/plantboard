'use client';
import { PrismaClient } from '@prisma/client';
import * as Select from '@radix-ui/react-select';
import { useSession } from 'next-auth/react';
import { ChevronDown } from 'react-feather';

const Searchbar: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <div className='col-span-2 flex gap-2 rounded-md bg-background-grey p-2 font-normal'>
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
          <Select.Content sideOffset={0}>
            <Select.Item value='fo' className='w-full rounded bg-red-500 p-2'>
              foo
            </Select.Item>
            <Select.Item value='bar' className='w-full rounded bg-red-500 p-2'>
              bar
            </Select.Item>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default Searchbar;
