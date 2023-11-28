import React from 'react';
import { Plant, Room } from '@prisma/client';
import Image from 'next/image';
import { v4 } from 'uuid';

const PlantChooser = ({
  room,
  detailPlant,
  setDetailPlant,
}: {
  room: Room & { plants: Plant[] };
  detailPlant: Plant;
  setDetailPlant: React.Dispatch<React.SetStateAction<Plant>>;
}) => {
  return (
    <div className='-z-10 col-span-5 col-start-1 flex h-full gap-8 overflow-x-scroll rounded-xl bg-white pt-4 '>
      {room.plants.map((plant) => (
        <PlantMini
          key={v4()}
          active={detailPlant && plant.id === detailPlant.id}
          plant={plant}
          setDetailPlant={setDetailPlant}
        />
      ))}
    </div>
  );
};

const PlantMini = ({
  active,
  plant,
  setDetailPlant,
}: {
  active: boolean;
  plant: Plant;
  setDetailPlant: React.Dispatch<React.SetStateAction<Plant>>;
}) => {
  const handleRowClick = (selectedPlant: Plant) => {
    setDetailPlant(selectedPlant);
  };

  return (
    <div
      onClick={() => handleRowClick(plant)}
      className={`aspect-sqaure flex w-[192px] flex-col items-center justify-center gap-1 rounded-lg py-6 ${
        !active ? 'bg-background-grey' : 'bg-primary-light'
      } transform cursor-pointer transition-all ease-out hover:-translate-y-3 hover:bg-primary-light`}
    >
      {plant.imageUrl ? (
        <Image
          src={plant.imageUrl}
          alt={plant.name ?? ''}
          width={128}
          height={128}
          sizes='(max-width: 768px) 100vw, 33vw'
          className='h-32 w-32 rounded-lg object-cover'
        />
      ) : (
        <div className='h-32 w-32 rounded-lg bg-primary'></div>
      )}
      <div className='text-center text-lg font-medium'>{plant.name}</div>
    </div>
  );
};

export const PlantChooserSkeleton = () => {
  const skeletonData = [{}, {}, {}, {}];

  return (
    <div className='col-span-5 col-start-1 flex h-full gap-8 rounded-xl bg-white pt-4'>
      {skeletonData.map((_, index) => (
        <div
          key={index}
          className='aspect-sqaure flex w-[192px] flex-col items-center justify-center gap-1 rounded-lg bg-background-grey py-6'
        >
          <div className='h-32 w-32 animate-pulse rounded-lg bg-background-grey'></div>
          <div className='h-8 w-24 animate-pulse rounded bg-background-grey text-center text-lg font-medium'></div>
        </div>
      ))}
    </div>
  );
};

export default PlantChooser;
