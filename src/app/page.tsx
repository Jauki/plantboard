import Navbar from '@/components/Navbar';

export default async function Home() {
  return (
    <>
      <Navbar />
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
