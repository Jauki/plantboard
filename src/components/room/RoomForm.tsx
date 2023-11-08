'use client';

import { createRoom } from '@/server/actions';
import { useFormState } from 'react-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import React from 'react';
import { X } from 'react-feather';

type RoomCarouselProps = {
  children: React.ReactNode[];
};

const initialState = {

}

// Todo: Use good CSS some bugs still there height to the top and X in the wrong corner i Guess

export const RoomForm: React.FC<RoomCarouselProps> = ({ children }) => {
  const [state, formAction] = useFormState(createRoom, initialState);
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState<number>(0);

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
  );
};

const SubmitButton = ({ onClick }: { onClick: () => void }) => {
  const { pending } = useFormState();

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
