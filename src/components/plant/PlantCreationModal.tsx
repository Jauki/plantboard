import * as Dialog from '@radix-ui/react-dialog';

import React from 'react';
import { HeadlessForm } from '../general/HeadlessForm';
import { createRoom } from '@/server/actions';
import PlanCreationStepOne from './creation/PlantCreationStepOne';
import { PlanCreationStepTwo } from './creation/PlantCreationStepTwo';
import { PlanCreationStepThree } from './creation/PlantCreationStepThree';

export const PlantCreationModal = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger className='flex h-max w-full items-center justify-center rounded-md bg-primary-light py-2  text-primary transition-colors ease-out hover:bg-primary hover:text-white'>
        Cultivate!
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-20' />
        <Dialog.Content className='fixed inset-0 flex flex-col items-center justify-center'>
          <div className='w-5/12 rounded-lg bg-white p-8 shadow-lg'>
            <HeadlessForm
              open={open}
              setOpen={setOpen}
              serverAction={createRoom}
            >
              <PlanCreationStepOne />
              <PlanCreationStepTwo />
              <PlanCreationStepThree />
            </HeadlessForm>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
