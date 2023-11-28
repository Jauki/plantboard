import GridManager from '@/components/dashboard/GridManager';

export default async function Home() {
  return (
    <>
      <main>
        <div className='h-32 w-full bg-primary'></div>
        <GridManager />
      </main>
    </>
  );
}
