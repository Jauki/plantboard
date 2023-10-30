import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import React from 'react';
import { X } from 'react-feather';
import { motion } from 'framer-motion';
import RoomCreationStepOne from './creation/RoomCreationStepOne';
import RoomCreationStepTwo from './creation/RoomCreationStepTwo';
import RoomCreationStepThree from './creation/RoomCreationStepThree';
import * as Toast from '@radix-ui/react-toast';
import prisma from '../../../prisma/client';
import { LocationType, Size } from '@prisma/client';
import z from 'zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { createRoom } from '@/app/actions';
import * as Select from '@radix-ui/react-select';
import { Plus } from 'react-feather';

const RoomCreationModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className='flex h-full w-full justify-center subpixel-antialiased'>
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
  const [open, setOpen] = useState(false);
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
      <form action={createRoom}>
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
            <SubmitButton onClick={() => setOpen(true)} />
          )}
        </div>
        <Dialog.Close asChild>
          <button
            className='absolute right-8 top-8 flex items-center justify-center rounded-md border border-background-grey p-1 text-foreground-grey transition-all ease-in hover:border-gray-300 hover:bg-gray-50 hover:text-gray-300'
            aria-label='Close'
          >
            <X size={16} />
          </button>
        </Dialog.Close>
      </form>

      <Toast.Root open={open} onOpenChange={setOpen} duration={3000}>
        <Toast.Description className='z-20 rounded-md border-2 border-background-grey bg-white p-5'>
          Imported Room!
        </Toast.Description>
      </Toast.Root>
    </Dialog.Content>
  );
};

const SubmitButton = ({ onClick }: { onClick: () => void }) => {
  const { pending } = { pending: false }; // useFormStatus?

  return (
    <Dialog.Close onClick={onClick} asChild>
      <input
        value={pending ? 'Import...' : 'Import'}
        aria-label='submit'
        aria-disabled={pending}
        type='submit'
        className='flex h-8 w-32 cursor-pointer items-center justify-center rounded-md bg-primary-light px-4 py-1 text-primary'
      />
    </Dialog.Close>
  );
};
