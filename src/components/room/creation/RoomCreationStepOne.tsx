'use client';
import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';

interface RadioButtonProps {
  value: string;
  svg: React.ReactNode;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  svg,
  checked,
  onChange,
}) => (
  <div
    tabIndex={0}
    onClick={() => onChange(value)}
    className={`flex h-16 w-3/4 cursor-pointer flex-row items-center justify-start gap-4 rounded-md border ${
      checked ? 'outline-primary' : 'outline-background-grey'
    } border-background-grey p-4 outline-offset-2 transition-all ease-in hover:bg-background-grey focus:outline focus:outline-2`}
  >
    <input
      type='radio'
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
      name='roomType'
      style={{ display: 'none' }}
    />
    <div>{svg}</div>
    <div>{value}</div>
  </div>
);

interface RadioButtonGroupProps {
  options: { value: string; svg: React.ReactNode }[];
  onChange: (value: string) => void;
  selectedValue: string;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  onChange,
  selectedValue,
}) => {
  return (
    <div className='my-8 flex flex-col gap-2'>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          value={option.value}
          svg={option.svg}
          checked={option.value === selectedValue}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

const RoomCreationStepOne = () => {
  const [roomType, setRoomType] = useState('indoor');

  const outdoorSVG = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24px'
      height='24px'
      fill='none'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      color='#000000'
    >
      <path
        stroke='#000000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 2 7 6.643S10.042 7 12 7c1.958 0 5-.357 5-.357L12 2ZM8.5 7 5 10.94S7.625 12 12 12s7-1.06 7-1.06L15.5 7'
      ></path>
      <path
        stroke='#000000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6.5 11.5 3 15.523S5.7 18 12 18s9-2.477 9-2.477L17.5 11.5M12 22v-3'
      ></path>
    </svg>
  );

  const indoorSVG = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24px'
      height='24px'
      fill='none'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      color='#000000'
    >
      <path
        stroke='#000000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M2 16v3M4 9V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2'
      ></path>
      <path
        stroke='#000000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M20 9a2 2 0 0 0-2 2v2H6v-2a2 2 0 1 0-4 0v6h20v-6a2 2 0 0 0-2-2ZM22 16v3'
      ></path>
    </svg>
  );

  const options = [
    { value: 'Outdoor', svg: outdoorSVG },
    { value: 'Indoor', svg: indoorSVG },
  ];

  return (
    <div className=''>
      <Dialog.Title className='text-2xl'>Add Room</Dialog.Title>
      <Dialog.DialogDescription className='mt-4 text-sm font-light text-gray-700 '>
        Create dedicated plant spaces by adding rooms your plantboard. Organize
        your plant collection based on location or environmental requirements
        for more effective plant care management.
      </Dialog.DialogDescription>
      <RadioButtonGroup
        options={options}
        selectedValue={roomType}
        onChange={setRoomType}
      />
    </div>
  );
};

export default RoomCreationStepOne;
