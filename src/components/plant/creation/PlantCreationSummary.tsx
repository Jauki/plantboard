import { Plant } from '@prisma/client';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';

export const PlanCreationSummary = ({
  plant,
}: {
  plant: Partial<Plant> | undefined;
}) => {
  const foo = useFormStatus();

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
      <pre>{JSON.stringify(foo)}</pre>
      <PlantDisplayForm plant={plant} />
    </div>
  );
};

const PlantDisplayForm = ({ plant }: { plant: Partial<Plant> | undefined }) => (
  <div className='w-full'>
    <div className='flex justify-between'>
      <div className='flex flex-col gap-1'>
        <div>{plant?.name}</div>
        <div className='text-sm text-foreground-grey'>{plant?.family}</div>
      </div>
      <div
        className={`relative flex h-32 w-32 items-center justify-center rounded-lg ${
          plant?.imageUrl ? '' : 'border-2 border-dashed border-foreground-grey'
        } text-foreground-grey`}
      >
        {plant?.imageUrl ? (
          <Image
            src={plant.imageUrl}
            objectFit='cover'
            fill
            className='rounded-lg'
            alt={plant.name!}
          />
        ) : (
          <div className='bg-primary'></div>
        )}
      </div>
    </div>
  </div>
);
