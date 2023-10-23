
import * as Dialog from '@radix-ui/react-dialog';

const RoomCreationStepThree = () => (
  <div className='w-full'>
    <Dialog.Title className='text-2xl'>Fill it up with Plants</Dialog.Title>

    <div className='mt-4 flex flex-col gap-4 '>
      <div className='flex gap-2'>
        <input
         className='focus:border-1 w-full rounded-md border border-background-grey px-2 py-1 transition-all focus:border-background-grey focus:outline-2 focus:outline-primary focus:ring-0' />
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex gap-1'>
            <div className='text-xs text-foreground-grey font-light'>Results</div>
            <div className='text-xs aspect-square bg-background-grey select-none text-foreground-grey w-4 h-4 text-center rounded-sm'>9+</div>
        </div>
        <div className='text-sm hover:underline text-primary'>
            See all
        </div>
      </div>
      <div className='w-full h-20 overflow-scroll'>
        <div className='p-2 flex pointer items-center gap-2 hover:bg-background-grey rounded-md transition-colors'>
            <div className='w-5 h-5 bg-primary rounded'></div>
            <div className=''>Monsterra</div>
            <div className='flex mx-20 bg-orange-100 text-orange-300 text-sm font-light p-1 rounded-md'>Livingroom</div>
            <div className='bg-primary-light px-4 py-1 rounded-md text-primary  ml-auto w-min tex-sm'>Move</div>
        </div>
      </div>
      <div>
      <div className='flex flex-row justify-between'>
        <div className='flex gap-1'>
            <div className='text-xs text-foreground-grey font-light'>Recently</div>
            <div className='text-xs aspect-square bg-background-grey select-none text-foreground-grey w-4 h-4 text-center rounded-sm'>2</div>
        </div>
        <div className='text-sm text-primary'>
            See all
        </div>
      </div>
      <div className='w-full h-40'>
        <div className='p-2 flex pointer items-center gap-2 hover:bg-background-grey rounded-md transition-colors'>
            <div className='w-5 h-5 bg-primary rounded'></div>
            <div className=''>Monsterra</div>
            <div className='flex mx-20 bg-orange-100 text-orange-300 text-sm font-light p-1 rounded-md'>Livingroom</div>
            <div className='bg-primary-light px-4 py-1 rounded-md text-primary  ml-auto w-min tex-sm'>Move</div>
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default RoomCreationStepThree;
