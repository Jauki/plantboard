
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import React from 'react';
import { X } from 'react-feather';
import { motion } from 'framer-motion';
import RoomCreationStepOne from './creation/RoomCreationStepOne';
import RoomCreationStepTwo from './creation/RoomCreationStepTwo';
import RoomCreationStepThree from './creation/RoomCreationStepThree';

import { createRoom } from '@/app/actions';
import { useFormState } from 'react-dom';



// todo: Build Next Form to fill out these tools

const initialState: RoomDTO = {
  roomType: 'indoor',
  roomName: "fpp",
  roomColor: "#44444",
  roomSize: 'm'
}


type RoomDTO = {
  roomType: 'indoor' | 'oudoort';
  roomName: string;
  roomColor: string;
  roomSize: 's' | 'm' | 'l';
  // plants: Plant
};

const RoomCreationModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className='flex h-full w-full justify-center subpixel-antialiased'>
        Add Room
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-20' />
        <RoomCarousel>
          <RoomCreationStepOne />
          <RoomCreationStepTwo />
          <RoomCreationStepThree />
        </RoomCarousel>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RoomCreationModal;

type RoomCarouselProps = {
  children: React.ReactNode[];
};

const RoomCarousel: React.FC<RoomCarouselProps> = ({ children }) => {
  const [state, formAction] = useFormState(createRoom, initialState)
  const [step, setStep] = useState<number>(0);

  const onNextStep = () => {
    if (step < React.Children.count(children) - 1) {
      setStep(step + 1);
    }
  };

  const onPrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <Dialog.Content className='w-90vw max-h-85vh absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-lg bg-white p-8 shadow-lg'>
      <form action={formAction}>
      <div className='h-full w-full '>
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === step ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: index === step ? 'flex' : 'none' }}
          >
            {child}
          </motion.div>
        ))}
      </div>
      <div className='mt-4 flex flex-shrink flex-row justify-end gap-4'>
        {step > 0 && (
          <div
            className='flex w-32 cursor-pointer items-center justify-center rounded-md border border-background-grey bg-white px-4 py-1 text-gray-800'
            onClick={onPrevStep}
          >
            Previous
          </div>
        )}
        {step < React.Children.count(children) - 1 && (
          <div
            className='flex h-8 w-32 cursor-pointer items-center justify-center rounded-md bg-primary-light px-4 py-1 text-primary'
            onClick={onNextStep}
          >
            Next
          </div>
        )}
        {step === React.Children.count(children) - 1 && (
          <input
            type='submit'
            className='flex h-8 w-32 cursor-pointer items-center justify-center rounded-md bg-primary-light px-4 py-1 text-primary'
          >
            Import
          </input>
        )}
      </div>
      <Dialog.Close asChild>
        <button
          className='absolute right-8 flex items-center justify-center rounded-md border border-background-grey p-1 text-foreground-grey transition-all ease-in hover:border-red-600 hover:bg-red-400 hover:text-red-600'
          aria-label='Close'
        >
          <X size={16} />
        </button>
      </Dialog.Close>
      </form>
    </Dialog.Content>
  );
};
