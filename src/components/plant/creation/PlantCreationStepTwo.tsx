import HeadlessInputForm from '@/components/general/HeadlessInputForm';
import * as Dialog from '@radix-ui/react-dialog';

export const PlanCreationStepTwo = () => {
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
      <HeadlessInputForm
        name='size'
        required
        label='Plant Height'
        inputAttributes={{
          type: 'number',
          placeholder: '30 cm',
        }}
      />
    </div>
  );
};
