'use client';

import { useRoom } from '@/context/RoomContext';
import PlantDetailView, { PlantDetailSkeleton } from './PlantDetail';
import { Plant } from '@prisma/client';
import { useEffect, useState } from 'react';
import PlantChooser from './PlantChooser';
import DashboardNavigation from './DashboardNavigation';

const GridManager = () => {
  return (
    <div className='grid max-w-[1728px] grid-cols-8 items-center gap-6 px-12 py-2'>
      <DashboardNavigation />
    </div>
  );
};

export default GridManager;
