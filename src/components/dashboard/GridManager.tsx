'use client';

import { useRoom } from '@/context/RoomContext';
import PlantDetailView, { PlantDetailSkeleton } from './PlantDetail';
import { Plant } from '@prisma/client';

const GridManager = () => {
  const { room } = useRoom();
  console.log(room);
  return (
    <div className='grid max-w-[1728px] grid-cols-8 items-center gap-6 px-12 py-8'>
      {room ? (
        <PlantDetailView plant={room.plants[1]} />
      ) : (
        <PlantDetailSkeleton />
      )}
    </div>
  );
};

export default GridManager;
