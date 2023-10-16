import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className='h-48 w-full bg-primary'></div>
        <div className='max-w-[1728px] px-12 py-8 grid grid-cols-8 gap-6 items-center'>
          <h1 className='text-6xl col-span-3'>
            Welcome to <span className='text-primary'>Plantboard</span>, your
            virtual plant-stash
          </h1>
        </div>
      </main>
    </>
  );
}
