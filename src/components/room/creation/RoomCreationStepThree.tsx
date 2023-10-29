import * as Dialog from '@radix-ui/react-dialog';

const RoomCreationStepThree = () => (
  <div className='w-full'>
    <Dialog.Title className='text-2xl'>Fill it up with Plants</Dialog.Title>

    <div className='mt-4 flex flex-col gap-4 '>
      <div className='flex gap-2'>
        <input className='focus:border-1 w-full rounded-md border border-background-grey px-2 py-1 transition-all focus:border-background-grey focus:outline-2 focus:outline-primary focus:ring-0' />
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex gap-1'>
          <div className='text-xs font-light text-foreground-grey'>Results</div>
          <div className='aspect-square h-4 w-4 select-none rounded-sm bg-background-grey text-center text-xs text-foreground-grey'>
            9+
          </div>
        </div>
        <div className='text-sm text-primary hover:underline'>See all</div>
      </div>
      <div className='h-20 w-full overflow-scroll'>
        <div className='pointer flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-background-grey'>
          <div className='h-5 w-5 rounded bg-primary'></div>
          <div className=''>Monsterra</div>
          <div className='mx-20 flex rounded-md bg-orange-100 p-1 text-sm font-light text-orange-300'>
            Livingroom
          </div>
          <div className='tex-sm ml-auto w-min rounded-md bg-primary-light  px-4 py-1 text-primary'>
            Move
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-row justify-between'>
          <div className='flex gap-1'>
            <div className='text-xs font-light text-foreground-grey'>
              Recently
            </div>
            <div className='aspect-square h-4 w-4 select-none rounded-sm bg-background-grey text-center text-xs text-foreground-grey'>
              2
            </div>
          </div>
          <div className='text-sm text-primary'>See all</div>
        </div>
        <div className='h-40 w-full'>
          <div className='pointer flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-background-grey'>
            <div className='h-5 w-5 rounded bg-primary'></div>
            <div className=''>Monsterra</div>
            <div className='mx-20 flex rounded-md bg-orange-100 p-1 text-sm font-light text-orange-300'>
              Livingroom
            </div>
            <div className='tex-sm ml-auto w-min rounded-md bg-primary-light  px-4 py-1 text-primary'>
              Move
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RoomCreationStepThree;
