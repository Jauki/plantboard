import HeadlessInputForm from '@/components/general/HeadlessInputForm';
import { RadioButtonGroup } from '@/components/room/creation/RoomCreationStepTwo';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

enum WaterFrequency {
  light = 'light',
  moderate = 'moderate',
  frequent = 'frequent',
  abundant = 'abundant',
}

const WaterFrequencySelector = () => {
  const [selectedSize, setSelectedSize] = useState<WaterFrequency>(
    WaterFrequency.frequent
  );

  const handleSizeChange = (value: WaterFrequency) => {
    setSelectedSize(value);
  };

  const waterOptions = [
    {
      value: WaterFrequency.light,
      label: 'Light',
      description: 'Minimal watering, once a week.',
    },
    {
      value: WaterFrequency.moderate,
      label: 'Moderate',
      description: 'Two to three times a week.',
    },
    {
      value: WaterFrequency.frequent,
      label: 'Frequent',
      description: 'Every other day.',
    },
    {
      value: WaterFrequency.abundant,
      label: 'Abundant',
      description: 'Generous watering, daily care.',
    },
  ];

  return (
    <RadioButtonGroup
      selectedValue={selectedSize}
      options={waterOptions}
      onChange={handleSizeChange}
      groupName='waterFrequency'
    />
  );
};

export const PlantCreationStepFour = () => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <Dialog.Title className='text-2xl'>
        Choose Your Green Companion
      </Dialog.Title>
      <Dialog.DialogDescription className='mb-4 mt-4 text-sm font-light text-gray-700 '>
        Tailor your plant's hydration schedule with the Water Frequency
        Selector. Choose the watering frequency that suits your plant's needs,
        ensuring it receives the perfect amount of care. Personalize the
        watering routine to create an ideal environment for your green companion
        within the PlantBoard platform.
      </Dialog.DialogDescription>
      <label>How often do you water your Plant in a Week?</label>
      <WaterFrequencySelector />
    </div>
  );
};
