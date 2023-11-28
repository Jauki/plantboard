import { Plant, Room } from '@prisma/client';
import PlantDetailView, { PlantDetailSkeleton } from './overview/PlantDetail';
import PlantChooser, { PlantChooserSkeleton } from './overview/PlantChooser';
import { useRoom } from '@/context/RoomContext';
import { useEffect, useState } from 'react';
import PlantHealth from './overview/PlantHealth';

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
      {room ? <PlantHealth /> : <PlantHealth />}
      {room ? (
        <PlantChooser
          detailPlant={detailPlant}
          room={room}
          setDetailPlant={setDetailPlant}
        />
      ) : (
        <PlantChooserSkeleton />
      )}
    </>
  );
};

export default Overview;
