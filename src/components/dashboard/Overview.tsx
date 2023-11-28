import { Plant, Room } from '@prisma/client';
import PlantDetailView, { PlantDetailSkeleton } from './PlantDetail';
import PlantChooser from './PlantChooser';
import { useRoom } from '@/context/RoomContext';
import { useEffect, useState } from 'react';

const Overview = () => {
  const { room } = useRoom();
  const [detailPlant, setDetailPlant] = useState<Plant>(room?.plants[0]!);

  useEffect(() => {
    setDetailPlant(room?.plants[0]!);
  }, [room]);

  return (
    <>
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
    </>
  );
};

export default Overview;
