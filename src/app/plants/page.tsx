import Plants from '@/components/plant/Plants';
import { getExternalPlants } from '@/server/actions';

export default async function PlantPage() {
  const plants = await getExternalPlants();

  return (
    <>
      <main>
        <div className='h-48 w-full bg-primary'></div>
        <div className='grid max-w-[1728px] grid-cols-8 items-center gap-6 px-12 py-8'>
          <h2 className='col-span-2 text-3xl'>Explore new Plants</h2>
          <Plants plants={plants.data} />
        </div>
      </main>
    </>
  );
}
