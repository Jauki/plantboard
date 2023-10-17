import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { X } from 'react-feather';

enum RoomType {
    Room="Room",
    Garden="Garden"
}

const RoomCreationModal = ({}) => {
  const [roomType, setRoomType] = useState<RoomType>(RoomType.Room);

  return (
    <Dialog.Root>
      <Dialog.Trigger className='w-full justify-center h-full flex subpixel-antialiased'>
        Add {roomType}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-20' />
        <Dialog.Content className='bg-white shadow-lg flex flex-col rounded-lg absolute p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-90vw max-h-85vh'>
          <Dialog.Title className='text-2xl font-semibold'>Add {roomType}</Dialog.Title>
          <Dialog.Description className='text-gray-700 text-sm font-light w-3/4 mt-2'>
            Create dedicated plant spaces by adding roomTypes to your Plantboard. Organize your plant collection based on location or environmental requirements for more effective plant care management.
          </Dialog.Description>
          <label>Do you want to add a Room or a Garden? </label>
          <div className='flex w-10 place-content-end'>
            <Switch.Root onCheckedChange={() => setRoomType(roomType == RoomType.Room ? RoomType.Garden : RoomType.Room)} className='group relative inline-flex w-8 flex-shrink-0 cursor-pointer  rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 radix-state-checked:bg-primary radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-800'>
              <Switch.Thumb className='pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-radix-state-checked:translate-x-3 group-radix-state-unchecked:translate-x-0' />
            </Switch.Root>
          </div>
          <div className='flex justify-end mt-8'>
            <Dialog.Close asChild>
              <button className='flex p-2 w-32 rounded-md bg-primary-light text-primary justify-center items-center '>Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className='right-8 absolute border hover:bg-red-400 hover:text-red-600 hover:border-red-600 text-foreground-grey transition-all ease-in p-1 border-background-grey rounded-md flex justify-center items-center' aria-label='Close'>
              <X size={16}/>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RoomCreationModal;
