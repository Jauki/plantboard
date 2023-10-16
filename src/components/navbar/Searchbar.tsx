
"use client";
import { PrismaClient } from '@prisma/client';
import * as Select from '@radix-ui/react-select';
import { useSession } from 'next-auth/react';
import { ChevronDown } from "react-feather";

const Searchbar: React.FC = () => {
    const {data: session, status} = useSession();
    
    return (
        <div className='col-span-2 flex gap-2 p-2 font-normal bg-background-grey rounded-md'>
        <Select.Root>
        
            <Select.Trigger className="w-6 h-6 flex justify-center items-center rounded bg-primary-light">🪴</Select.Trigger>
            <input className="p-0 border-none focus:ring-0 bg-transparent font-light text-black w-full" placeholder="Living Room"/>
            <Select.Trigger className="text-foreground-grey">
                <ChevronDown/>
            </Select.Trigger>
        
            <Select.Portal >
                <Select.Content sideOffset={0}>
                    <Select.Item value='fo' className='w-full rounded bg-red-500 p-2'>foo</Select.Item>
                    <Select.Item value='bar' className='w-full rounded bg-red-500 p-2'>bar</Select.Item>
                </Select.Content>
            </Select.Portal>

        </Select.Root>
        </div>
      );
}

export default Searchbar;