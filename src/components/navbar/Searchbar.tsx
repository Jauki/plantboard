
"use client";
import * as Select from '@radix-ui/react-select';
import { ChevronDown } from "react-feather";

const Searchbar: React.FC = () => {
    return (
        <Select.Root>
            <div className="col-span-2 flex gap-2 p-2 font-normal bg-background-grey rounded-md">
            <Select.Trigger className="w-6 h-6 flex justify-center items-center rounded bg-primary-light">🪴</Select.Trigger>
            <input className="p-0 border-none focus:ring-0 bg-transparent font-light text-black w-full" placeholder="Living Room"/>
            <Select.Trigger className="text-foreground-grey">
                <ChevronDown/>
            </Select.Trigger>
            </div>
            <Select.Portal>
                <Select.Content>
                    <Select.Item value='fo'>foo</Select.Item>
                    <Select.Item value='bar'>bar</Select.Item>
                </Select.Content>
            </Select.Portal>

        </Select.Root>
        
      );
}

export default Searchbar;