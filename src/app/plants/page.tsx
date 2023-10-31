import Navbar from '@/components/Navbar';
import Searchbar from '@/components/plant/Searchbar';
import { getExternalPlants } from '../actions';
import Plant from '@/components/plant/Plants';

export default async function PlantPage() {
  const plants = await getExternalPlants();
  return (
    <>
      <Navbar />
      <main>
        <div className='h-48 w-full bg-primary'></div>
        <div className='grid max-w-[1728px] grid-cols-8 items-center gap-6 px-12 py-8'>
          <h2 className='col-span-2 text-2xl'>Explore new Plants</h2>
          <Searchbar />
          <Plant plants={plants}/>
        </div>
      </main>
    </>
  );
}
