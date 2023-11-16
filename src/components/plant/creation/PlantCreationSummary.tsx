import { Plant } from '@prisma/client';
import * as Dialog from '@radix-ui/react-dialog';

export const PlanCreationSummary = ({ plant }: { plant: Plant }) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <Dialog.Title className='text-2xl'>
        Verify that everything is correct
      </Dialog.Title>
      <Dialog.DialogDescription className='mb-4 mt-4 text-sm font-light text-gray-700 '>
        Review and confirm your plant details before importing. Ensure accuracy
        in room placement, sunlight selection, and watering frequency. Your
        green companion is ready for a thriving life in your personalized
        digital garden. Verify and let the botanical journey begin!
      </Dialog.DialogDescription>
    </div>
  );
};
