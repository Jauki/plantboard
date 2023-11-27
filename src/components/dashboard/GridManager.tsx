'use client';

import { useRoom } from '@/context/RoomContext';
import PlantDetailView, { PlantDetailSkeleton } from './PlantDetail';
import { Plant } from '@prisma/client';
import { useEffect, useState } from 'react';
import PlantChooser from './PlantChooser';
import DashboardNavigation from './DashboardNavigation';

const GridManager = () => {
  const { room } = useRoom();
  const [detailPlant, setDetailPlant] = useState<Plant>(room?.plants[0]!);

  useEffect(() => {
    setDetailPlant(room?.plants[0]!);
  }, [room]);

  return (
    <div className='grid max-w-[1728px] grid-cols-8 items-center gap-6 px-12 py-8'>
      <DashboardNavigation />
      {room && detailPlant ? (
        <PlantDetailView plant={detailPlant} />
      ) : (
        <PlantDetailSkeleton />
      )}
      {room ? (
        <PlantChooser
          detailPlant={detailPlant}
          room={room}
          setDetailPlant={setDetailPlant}
        />
      ) : null}
    </div>
  );
};

export default GridManager;
