import * as Dialog from '@radix-ui/react-dialog';

import React, { useState } from 'react';
import { HeadlessForm } from '../general/HeadlessForm';
import { createPlant, createRoom } from '@/server/actions';
import PlantCreationStepOne from './creation/PlantCreationStepOne';
import { PlanCreationStepTwo } from './creation/PlantCreationStepTwo';
import { PlanCreationStepThree } from './creation/PlantCreationStepThree';
import { PlantCreationStepFour } from './creation/PlantCreationStepFour';
import { PlanCreationSummary } from './creation/PlantCreationSummary';
import { Plant } from '@prisma/client';
import { useRoom } from '@/context/RoomContext';

export type PlantCreationChildren = {
  plant: Partial<Plant> | undefined;
  setPlant: (
    plant:
      | Partial<Plant>
      | undefined
      | ((prevVar: Partial<Plant> | undefined) => Partial<Plant>)
  ) => void;
};

export const PlantCreationModal = () => {
  const [open, setOpen] = useState(false);
  const [plant, setPlant] = useState<Partial<Plant>>();
  const { room } = useRoom();

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger
        disabled={room === null}
        className='flex h-max w-full items-center justify-center rounded-md bg-primary-light py-2  text-primary transition-colors ease-out hover:bg-primary hover:text-white'
      >
        Cultivate!
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-20' />
        <Dialog.Content className='fixed inset-0 flex flex-col items-center justify-center'>
          <div className='w-5/12 rounded-lg bg-white p-8 shadow-lg'>
            <HeadlessForm
              open={open}
              setOpen={setOpen}
              serverAction={createPlant}
            >
              <PlantCreationStepOne plant={plant} setPlant={setPlant} />
              <PlanCreationStepTwo plant={plant} setPlant={setPlant} />
              <PlanCreationStepThree plant={plant} setPlant={setPlant} />
              <PlantCreationStepFour plant={plant} setPlant={setPlant} />
              <PlanCreationSummary plant={plant} />
            </HeadlessForm>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
