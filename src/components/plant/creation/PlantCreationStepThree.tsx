import * as Dialog from '@radix-ui/react-dialog';
import HeadlessInputForm from '@/components/general/HeadlessInputForm';
import { RadioButtonGroup } from '@/components/room/creation/RoomCreationStepTwo';
import { useState } from 'react';
import { Box, Sun } from 'react-feather';

enum SunLight {
  Sunlight = 'sunlight',
  Shade = 'shade',
  GrowBox = 'growbox',
  HalfShade = 'halfshade',
}

const PlantSizeSelector = () => {
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
      svg: <Box />,
    },
    {
      value: SunLight.HalfShade,
      label: 'Half-shade',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 256 256'
        >
          <path d='M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z'></path>
        </svg>
      ),
    },
    {
      value: SunLight.Shade,
      label: 'Shade',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 256 256'
        >
          <path d='M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z'></path>
        </svg>
      ),
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
        Adjust the sunlight for your plants effortlessly with the Sunlight
        Selector. Choose the perfect exposure to keep your green companions
        happy and thriving. Personalize the brightness and watch your plants
        bask in the ideal conditions within the PlantBoard platform."
      </Dialog.DialogDescription>
      <PlantSizeSelector />
    </div>
  );
};
