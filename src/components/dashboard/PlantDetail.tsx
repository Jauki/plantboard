import { Plant } from '@prisma/client';
import Image from 'next/image';
import { Edit, Heart } from 'react-feather';

const PlantDetailView = ({ plant }: { plant: Plant }) => {
  return (
    <div className='col-span-4 flex  gap-10  rounded-xl bg-white px-10 py-4'>
      {plant.imageUrl ? (
        <Image
          src={plant.imageUrl}
          alt={plant.familyCommonName ?? ''}
          height={224}
          width={224}
          sizes='(max-width: 768px) 100vw, 33vw'
          className='aspect-square h-56 w-56 rounded-md bg-background-grey object-cover'
        />
      ) : (
        <div className='aspect-square h-[224px] w-[224px] rounded-md bg-primary'></div>
      )}
      <div className='flex w-full flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <div className=' flex h-6 items-center rounded-xl bg-primary-light px-3 py-2 text-xs text-primary'>
            Healthy
          </div>
          <div>
            <Heart />
          </div>
        </div>
        <div className='flex w-4/6 flex-col gap-0.5'>
          <div className='text-2xl font-medium'>{plant.name}</div>
          <div className='text-sm text-foreground-grey'>
            {plant.family ?? 'N/A'}
          </div>
        </div>
        <p className='h-24 w-full rounded text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est
          facilis nesciunt fugiat maxime itaque pariatur eaque obcaecati
          distinctio repellat hic, doloremque necessitatibus accusamus labore,
          voluptate blanditiis ab libero quod?
        </p>
        <div className='flex gap-2'>
          <StateDisplay title='Size' result={`${plant.height} cm`} />
          <StateDisplay title='Lighting' result={`${plant.sunlight}`} />
          <StateDisplay title='Watering' result={`${plant.waterFrequency}`} />
        </div>
      </div>
    </div>
  );
};

const StateDisplay = ({ title, result }: { title: string; result: string }) => (
  <div className='flex w-32  flex-col'>
    <div className='text-xs font-light text-foreground-grey'>{title}</div>
    <div className='text-lg font-medium text-primary'>{result}</div>
  </div>
);

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
    <div className='col-span-4 flex gap-10 rounded-xl bg-white px-10 py-4'>
      <div className='aspect-square h-56 w-56 animate-pulse rounded-md bg-background-grey object-cover'></div>
      <div className='flex w-full flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <div className='flex h-6 w-24 animate-pulse items-center rounded-xl bg-background-grey px-3 py-2 '></div>
          <div className='animate-pulse'>
            {/* Assuming Heart is an icon, you can replace this with your Heart component */}
            <div className='aspect-square h-6 w-6 rounded-md bg-background-grey'></div>
          </div>
        </div>
        <div className='flex w-4/6 flex-col gap-0.5'>
          <div className='h-8 w-3/4 animate-pulse rounded bg-background-grey text-2xl font-medium'></div>
          <div className='h-4 w-2/3 animate-pulse rounded bg-background-grey text-sm text-foreground-grey'></div>
        </div>
        <div className='h-24 w-full animate-pulse rounded bg-background-grey'></div>
        <div className='flex gap-2'>
          <div className='flex w-32 animate-pulse flex-col'>
            <div className='h-4 w-full rounded bg-background-grey text-xs font-light text-foreground-grey'></div>
            <div className='h-8 w-full rounded bg-background-grey text-lg font-medium text-primary'></div>
          </div>
          <div className='flex w-32 animate-pulse flex-col'>
            <div className='h-4 w-full rounded bg-background-grey text-xs font-light text-foreground-grey'></div>
            <div className='h-8 w-full rounded bg-background-grey text-lg font-medium text-primary'></div>
          </div>
          <div className='flex w-32 animate-pulse flex-col'>
            <div className='h-4 w-full rounded bg-background-grey text-xs font-light text-foreground-grey'></div>
            <div className='h-8 w-full rounded bg-background-grey text-lg font-medium text-primary'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetailView;
