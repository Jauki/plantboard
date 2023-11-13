import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import RoomCreationStepOne from './creation/RoomCreationStepOne';
import RoomCreationStepTwo from './creation/RoomCreationStepTwo';
import RoomCreationStepThree from './creation/RoomCreationStepThree';
import * as Select from '@radix-ui/react-select';
import { Plus } from 'react-feather';

import { HeadlessForm } from '../general/HeadlessForm';
import { createRoom } from '@/server/actions';

const RoomCreationModal = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger className='flex h-full w-full justify-center'>
        <Select.Item
          value='addRoom'
          disabled
          className='group flex w-full cursor-pointer gap-2 rounded-md bg-primary-light p-2 font-medium  text-primary'
        >
          <div className='flex h-6 w-6 items-center justify-center text-primary'>
            <Plus width={24} height={24} />
          </div>
          <Select.ItemText>Add room</Select.ItemText>
        </Select.Item>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-20' />
        <Dialog.Content className='fixed inset-0 flex flex-col items-center justify-center'>
          <div className='w-5/12 rounded-lg bg-white p-8 shadow-lg'>
            <HeadlessForm
              setOpen={setOpen}
              open={open}
              serverAction={createRoom}
            >
              <RoomCreationStepOne />
              <RoomCreationStepTwo />
              <RoomCreationStepThree />
            </HeadlessForm>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RoomCreationModal;
