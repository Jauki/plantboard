import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import React, { useRef } from 'react';
import { X } from 'react-feather';
import { motion, useAnimation } from 'framer-motion';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

const RoomCreationModal = ({}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className='flex h-full w-full justify-center subpixel-antialiased'>
        Add Room
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-20' />
        <RoomCarousel>
          <StepOne />
          <StepTwo />
        </RoomCarousel>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RoomCreationModal;

const StepOne = () => {
  return (
    <div className=''>
      <Dialog.Title className='text-2xl'>Add Room</Dialog.Title>
      <Dialog.DialogDescription className='font-ligth mt-4 text-sm text-gray-700 '>
        Create dedicated plant spaces by adding rooms your plantboard. Organize
        your plant collection based on location or environmental requirements
        for more effective plant care management.
      </Dialog.DialogDescription>
      <div className='mt-6 flex flex-col gap-2'>
        <OutdoorIndoorButton>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24px'
            height='24px'
            fill='none'
            stroke-width='1.5'
            viewBox='0 0 24 24'
            color='#000000'
          >
            <path
              stroke='#000000'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M12 2 7 6.643S10.042 7 12 7c1.958 0 5-.357 5-.357L12 2ZM8.5 7 5 10.94S7.625 12 12 12s7-1.06 7-1.06L15.5 7'
            ></path>
            <path
              stroke='#000000'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6.5 11.5 3 15.523S5.7 18 12 18s9-2.477 9-2.477L17.5 11.5M12 22v-3'
            ></path>
          </svg>
          Outdoor
        </OutdoorIndoorButton>
        <OutdoorIndoorButton>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24px'
            height='24px'
            fill='none'
            stroke-width='1.5'
            viewBox='0 0 24 24'
            color='#000000'
          >
            <path
              stroke='#000000'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M2 16v3M4 9V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2'
            ></path>
            <path
              stroke='#000000'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M20 9a2 2 0 0 0-2 2v2H6v-2a2 2 0 1 0-4 0v6h20v-6a2 2 0 0 0-2-2ZM22 16v3'
            ></path>
          </svg>
          Indoor
        </OutdoorIndoorButton>
      </div>
    </div>
  );
};

type RoomCarouselProps = {
  children: React.ReactNode[];
};

const RoomCarousel: React.FC<RoomCarouselProps> = ({ children }) => {
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
      </div>
      <Dialog.Close asChild>
        <button
          className='absolute right-8 flex items-center justify-center rounded-md border border-background-grey p-1 text-foreground-grey transition-all ease-in hover:border-red-600 hover:bg-red-400 hover:text-red-600'
          aria-label='Close'
        >
          <X size={16} />
        </button>
      </Dialog.Close>
    </Dialog.Content>
  );
};

const OutdoorIndoorButton = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleOnClick = () => {
    if (divRef.current) {
      divRef.current.focus();
    }
  };
  // maybe add an arrow to continue?

  return (
    <div
      tabIndex={0}
      ref={divRef}
      onClick={handleOnClick}
      className='flex h-16 w-3/4  cursor-pointer flex-row items-center justify-start gap-4 rounded-md border border-background-grey p-4 outline-offset-2 outline-primary transition-all ease-in hover:bg-background-grey focus:outline focus:outline-2 '
    >
      {children}
    </div>
  );
};

const StepTwo = () => (
  <div className='w-full'>
    <Dialog.Title className='text-2xl'>Room Personalization</Dialog.Title>
    <div className='mt-4 flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <div>Roomname*</div>
        <input className='focus:border-1 w-full rounded-md border border-background-grey px-2 py-1 transition-all focus:border-background-grey focus:outline-2 focus:outline-primary focus:ring-0' />
      </div>
      <div className='flex items-center justify-between'>
        <div>Room Icon Color:</div>
        <div className='flex gap-2.5'>
          <input
            type='radio'
            name='green'
            id='green'
            className='h-5 w-5 rounded-sm border-none bg-primary text-primary focus:ring-2 focus:ring-primary'
          />
          <input
            type='radio'
            name='green'
            id='green'
            className='h-5 w-5 rounded-sm border-none bg-green-500 text-green-500 focus:ring-2 focus:ring-primary'
          />
          <input
            type='radio'
            name='green'
            id='green'
            className='h-5 w-5 rounded-sm border-none bg-primary-light text-primary-light focus:ring-2 focus:ring-primary'
          />
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <div>Room Size:</div>
        <p className='text-sm font-light text-foreground-grey'>
          Tailor your room's ambiance for healthier plants. Begin by entering
          your room dimensions.
        </p>
        <div className='mx-10 my-3  flex flex-row gap-8'>
          <div className='flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border border-background-grey transition-all hover:outline hover:outline-2 hover:outline-primary'>
            <div className='text-lg font-medium'>S</div>
            <div className='w-3/4 text-center text-xs font-light text-foreground-grey'>
              Cozy, perfect for small spaces. 5m<sup>2</sup>
            </div>
          </div>
          <div className='flex  aspect-square cursor-pointer  flex-col items-center justify-center rounded-lg border border-background-grey transition-all hover:outline hover:outline-2 hover:outline-primary'>
            <div className='text-lg font-medium'>M</div>
            <div className='w-3/4 text-center text-xs font-light text-foreground-grey'>
              A standard, comfortable size. Up to 40m<sup>2</sup>
            </div>
          </div>
          <div className='flex aspect-square cursor-pointer  flex-col items-center justify-center rounded-lg border border-background-grey transition-all hover:outline hover:outline-2 hover:outline-primary'>
            <div className='text-lg font-medium'>L</div>
            <div className='w-3/4 text-center text-xs font-light text-foreground-grey'>
              Generous for abundant growth. Up to 75m<sup>2</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

