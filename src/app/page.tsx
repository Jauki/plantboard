import { getRooms } from '@/components/navbar/Searchbar';
import { QueryClient } from '@tanstack/react-query';

export default async function Home() {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ['rooms'],
  //   queryFn: () => getRooms(),
  // });
  return (
    <>
      <main>
        <div className='h-48 w-full bg-primary'></div>
        <div className='grid max-w-[1728px] grid-cols-8 items-center gap-6 px-12 py-8'>
          <h1 className='col-span-3 text-6xl'>
            Welcome to <span className='text-primary'>Plantboard</span>, your
            virtual plant-stash
          </h1>
        </div>
      </main>
    </>
  );
}
