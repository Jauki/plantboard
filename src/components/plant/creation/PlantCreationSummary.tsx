import { useRoom } from '@/context/RoomContext';
import { Plant } from '@prisma/client';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';

export const PlanCreationSummary = ({
  plant,
}: {
  plant: Partial<Plant> | undefined;
}) => {
  const { room } = useRoom();
  return (
    <div className='flex w-full flex-col gap-2'>
      <Dialog.Title className='text-2xl'>
        Verify that everything is correct
      </Dialog.Title>
      <input hidden aria-hidden name='roomId' value={room?.id} readOnly />
      <Dialog.DialogDescription className='mb-4 mt-4 text-sm font-light text-gray-700 '>
        Review and confirm your plant details before importing. Ensure accuracy
        in room placement, sunlight selection, and watering frequency. Your
        green companion is ready for a thriving life in your personalized
        digital garden. Verify and let the botanical journey begin! You are
        adding your plant to{' '}
        <span className='font-medium text-primary'>{room?.roomName}</span>
      </Dialog.DialogDescription>
      <PlantDisplayForm plant={plant} />
    </div>
  );
};

const PlantDisplayForm = ({ plant }: { plant: Partial<Plant> | undefined }) => (
  <div className='w-full'>
    <div className='flex justify-between'>
      <div className='flex flex-col gap-1'>
        <div className='text-lg'>{plant?.name}</div>
        <div className='text-sm text-foreground-grey'>{plant?.family}</div>
        <div className='flex items-end gap-1'>
          <div className='items-center  font-medium'>Height:</div>
          <div>{plant?.height}cm</div>
        </div>
        <div className='flex items-center  gap-1'>
          <div className=' font-medium'>Waterfrequency:</div>
          <div>{plant?.waterFrequency}</div>
        </div>
        <div className='flex items-center  gap-1'>
          <div className=' font-medium'>Lighting Condition:</div>
          <div>{plant?.sunlight}</div>
        </div>
      </div>
      <div
        className={`relative flex h-32 w-32 items-center justify-center rounded-lg ${
          plant?.imageUrl ? '' : 'border-2 border-dashed border-foreground-grey'
        } text-foreground-grey`}
      >
        {plant?.imageUrl ? (
          <Image
            src={plant.imageUrl}
            fill
            sizes='(max-width: 300px) 100vw, 33vw'
            className='rounded-lg object-cover'
            alt={plant.name!}
          />
        ) : (
          <div className='bg-primary'></div>
        )}
      </div>
    </div>
  </div>
);
