import { Plant } from '@prisma/client';
import Image from 'next/image';

const PlantDetailView = ({ plant }: { plant: Plant }) => {
  return (
    <div className='col-span-4 flex  items-center gap-10  rounded-xl bg-white px-8 py-6'>
      {plant.imageUrl ? (
        <Image
          src={plant.imageUrl}
          alt={plant.familyCommonName ?? ''}
          height={220}
          width={220}
          sizes='(max-width: 768px) 100vw, 33vw'
          className='aspect-square w-56 rounded-md bg-background-grey object-cover'
        />
      ) : (
        <div className='aspect-square w-56 rounded-md bg-background-grey'></div>
      )}
      <div className='flex w-full flex-col gap-2'>
        <div className='flex h-6 w-1/3 items-center rounded-xl bg-red-50 p-2 text-sm text-red-500'>
          water me!
        </div>
        <div className='flex w-4/6 flex-col gap-0.5'>
          <div className='text-2xl font-medium'>{plant.name}</div>
          <div className='text-sm text-foreground-grey'>{plant.family}</div>
        </div>
        <p className='h-24 w-full rounded text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est
          facilis nesciunt fugiat maxime itaque pariatur eaque obcaecati
          distinctio repellat hic, doloremque necessitatibus accusamus labore,
          voluptate blanditiis ab libero quod?
        </p>
        <div className='flex flex-row gap-2 pt-2'>
          <CircularProgressBar progress={80} />
          <CircularProgressBar progress={10} />
          <CircularProgressBar progress={3} />
          <CircularProgressBar progress={333} />
        </div>
      </div>
    </div>
  );
};

const CircularProgressBar = ({ progress }: { progress: number }) => {
  const calculateStrokeDasharray = () => {
    const circumference = 2 * Math.PI * 50; // Assuming radius of 50
    const dasharrayValue = (progress / 100) * circumference;
    return `${dasharrayValue} ${circumference - dasharrayValue}`;
  };

  return (
    <div className='relative h-12 w-12'>
      <svg
        className='absolute box-border '
        viewBox='-8 -8 116 116' // Added padding of 4 pixels to the viewBox
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          className='stroke-current text-gray-200'
          cx='50'
          cy='50'
          r='48'
          strokeWidth='16'
          fill='none'
        />
        <circle
          className='rounded stroke-current text-primary transition-all duration-500 ease-in-out'
          cx='50'
          cy='50'
          r='48'
          strokeWidth='16'
          fill='none'
          strokeDasharray={calculateStrokeDasharray()}
        />
      </svg>
      <div className='absolute inset-0 flex items-center justify-center text-sm text-black '>
        {progress}%
      </div>
    </div>
  );
};

export const PlantDetailSkeleton = () => {
  return (
    <div className='py-4lg col-span-4 flex animate-pulse  items-center gap-10 rounded-xl bg-white px-8'>
      <div className='aspect-square w-56 rounded-md bg-background-grey'></div>
      <div className='flex w-full flex-col gap-2'>
        <div className='h-6 w-1/3 rounded bg-background-grey'></div>
        <div className='h-10 w-4/6 rounded bg-background-grey'></div>
        <div className='h-24 w-full rounded bg-background-grey'></div>
        <div className='flex flex-row gap-2 pt-2'>
          <div className='aspect-square w-12 rounded bg-background-grey'></div>
          <div className='aspect-square w-12 rounded bg-background-grey'></div>
          <div className='aspect-square w-12 rounded bg-background-grey'></div>
          <div className='aspect-square w-12 rounded bg-background-grey'></div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetailView;
