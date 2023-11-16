import * as Dialog from '@radix-ui/react-dialog';
import HeadlessInputForm from '@/components/general/HeadlessInputForm';
import { RadioButtonGroup } from '@/components/room/creation/RoomCreationStepTwo';
import { useState } from 'react';
import { Sun } from 'react-feather';

enum SunLight {
  Sunlight = 'sunlight',
  Shade = 'shade',
  GrowBox = 'growbox',
  HalfShade = 'halfshade',
}

const RoomSizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState<SunLight>(SunLight.Sunlight);

  const handleSizeChange = (value: SunLight) => {
    setSelectedSize(value);
  };

  const sizeOptions = [
    {
      value: SunLight.Sunlight,
      label: 'Sunlight',
      svg: <Sun />,
    },
    {
      value: SunLight.GrowBox,
      label: 'Growbox',
      description: 'A standard, comfortable size. Up to 40m²',
    },
    {
      value: SunLight.HalfShade,
      label: 'HalfShade',

      description: 'Generous for abundant growth. Up to 75m²',
    },
    {
      value: SunLight.Shade,
      label: 'HalfShade',
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

export const PlanCreationStepThree = () => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <Dialog.Title className='text-2xl'>
        Choose Your Green Companion
      </Dialog.Title>
      <Dialog.DialogDescription className='mb-4 mt-4 text-sm font-light text-gray-700 '>
        Tailor your digital garden on PlantBoard with ease! Simply pick the
        perfect plant height to create a customized oasis in each room. Enjoy
        watching your virtual garden thrive as you make your selections – it's
        that simple!
      </Dialog.DialogDescription>
      <RoomSizeSelector />
    </div>
  );
};
