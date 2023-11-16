'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { Size } from '@prisma/client';
import RoomCreationModal from '../RoomCreationModal';

const RoomIconColorRadioGroup = () => {
  const [selectedColor, setSelectedColor] = useState('green');

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className='flex items-center justify-between'>
      <div>Room Icon Color:</div>
      <div className='flex gap-2.5'>
        <input
          type='radio'
          name='roomIconColor'
          value='green'
          checked={selectedColor === 'green'}
          onChange={() => handleColorChange('green')}
          className='h-5 w-5 rounded-sm border-none bg-primary text-primary focus:ring-2 focus:ring-primary'
        />
        <input
          type='radio'
          name='roomIconColor'
          value='green-500'
          checked={selectedColor === 'green-500'}
          onChange={() => handleColorChange('green-500')}
          className='h-5 w-5 rounded-sm border-none bg-green-500 text-green-500 focus:ring-2 focus:ring-primary'
        />
        <input
          type='radio'
          name='roomIconColor'
          value='primary-light'
          checked={selectedColor === 'primary-light'}
          onChange={() => handleColorChange('primary-light')}
          className='h-5 w-5 rounded-sm border-none bg-primary-light text-primary-light focus:ring-2 focus:ring-primary'
        />
      </div>
    </div>
  );
};

export type RadioButtonGroupProps<T extends string> = {
  selectedValue: T;
  options: Array<{
    value: T;
    label: string;
    description?: string;
    svg?: React.ReactNode;
  }>;
  onChange: (value: T) => void;
  groupName: string;
};

export const RadioButtonGroup = <T extends string>({
  selectedValue,
  options,
  onChange,
  groupName,
}: RadioButtonGroupProps<T>) => {
  return (
    <div className='mx-10 my-3  flex flex-row gap-8'>
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border border-background-grey outline-2 outline-primary transition-all hover:outline ${
            selectedValue === option.value ? 'outline outline-primary' : ''
          }`}
        >
          <input
            type='radio'
            name={groupName}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            style={{ display: 'none' }}
          />
          <div className='my-4'>{option.svg}</div>

          <div className='text-lg font-medium'>{option.label}</div>
          {option ? (
            <div className='w-3/4 text-center text-xs font-light text-foreground-grey'>
              {option.description}
            </div>
          ) : null}
        </label>
      ))}
    </div>
  );
};

const RoomSizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState<Size>(Size.S);

  const handleSizeChange = (value: Size) => {
    setSelectedSize(value);
  };

  const sizeOptions = [
    {
      value: Size.S,
      label: 'Small',
      description: 'Cozy, perfect for small spaces. 5m²',
    },
    {
      value: Size.M,
      label: 'Medium',
      description: 'A standard, comfortable size. Up to 40m²',
    },
    {
      value: Size.L,
      label: 'Large',
      description: 'Generous for abundant growth. Up to 75m²',
    },
  ];

  return (
    <RadioButtonGroup
      selectedValue={selectedSize}
      options={sizeOptions}
      onChange={handleSizeChange}
      groupName='roomSize'
    />
  );
};

const RoomCreationStepTwo = () => (
  <div className='w-full'>
    <Dialog.Title className='text-2xl'>Room Personalization</Dialog.Title>
    <div className='mt-4 flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <div>Roomname*</div>
        <input
          name='roomName'
          className='focus:border-1 w-full rounded-md border border-background-grey px-2 py-1 transition-all focus:border-background-grey focus:outline-2 focus:outline-primary focus:ring-0'
        />
      </div>
      <RoomIconColorRadioGroup />
      <div className='flex flex-col gap-1'>
        <div>Room Size:</div>
        <p className='text-sm font-light text-foreground-grey'>
          Tailor your room&lsquos; ambiance for healthier plants. Begin by
          entering your room dimensions.
        </p>
        <RoomSizeSelector />
      </div>
    </div>
  </div>
);

export default RoomCreationStepTwo;
