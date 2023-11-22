import { ArrowDown, ArrowUp, Filter, Star } from 'react-feather';

async function getWishlist() {
  try {
    const res = await fetch('/api/plant/wishlist');
    // console.log(res);
    const plants = await res.json();

    return plants;
  } catch (e) {
    console.log(e);
  }
}

export default async function WishlistPage() {
  const wishlist = await getWishlist();

  return (
    <>
      <main>
        <div className='h-48 w-full bg-primary'></div>
        <div className='grid max-w-[1728px] grid-cols-8 items-center gap-6 px-12 py-8'>
          <h2 className='col-span-2 flex items-center gap-2 text-3xl'>
            <Star />
            My Wishlist
          </h2>
          <div className='col-span-1 col-start-8 flex justify-evenly'>
            <div className='flex cursor-pointer rounded-md p-2 outline outline-2 outline-background-grey transition-all duration-200 ease-in hover:bg-primary-light hover:text-primary hover:outline-primary'>
              <Filter size={18} />
            </div>
            <div className='flex cursor-pointer rounded-md p-2 outline outline-2 outline-background-grey transition-all duration-200 ease-in hover:bg-primary-light hover:text-primary hover:outline-primary'>
              <ArrowUp size={18} />
            </div>
            <div className='flex cursor-pointer rounded-md p-2 outline outline-2 outline-background-grey transition-all duration-200 ease-in hover:bg-primary-light hover:text-primary hover:outline-primary'>
              <ArrowDown size={18} />
            </div>
          </div>
          <p className='text-md col-span-4  col-start-1 font-light'>
            Your plant desires, your PlantBoard Wishlist. Keep an organized
            record of the plants you wish for in your rooms, turning your
            botanical dreams into a beautiful reality.
          </p>
        </div>
      </main>
    </>
  );
}
