import HeadlessInputForm from '@/components/general/HeadlessInputForm';
import { PlantNameInput } from '../PlantNameInput';
import { PlantSpeciesInput } from '../PlantSpeciesInput';
import * as Dialog from '@radix-ui/react-dialog';
import { Upload } from 'react-feather';
import { ChangeEvent, useState } from 'react';
import { Plant } from '@prisma/client';
import Image from 'next/image';
import { PlantCreationChildren } from '../PlantCreationModal';

export default function PlantCreationStepOne({
  plant,
  setPlant,
}: PlantCreationChildren) {
  const handleImageChange = (imageUrl: string) => {
    setPlant((prevPlant) => ({
      ...prevPlant,
      imageUrl: imageUrl,
    }));
  };

  return (
    <div className='flex w-full flex-col gap-2'>
      <Dialog.Title className='text-2xl'>
        Choose Your Green Companion
      </Dialog.Title>
      <Dialog.DialogDescription className='mb-4 mt-4 text-sm font-light text-gray-700 '>
        Expand your green sanctuary effortlessly on PlantBoard. Seamlessly add
        plants to your digital garden, customizing each room with a simple
        click. Watch your virtual oasis grow as you curate the perfect blend of
        botanical beauty within the PlantBoard platform.
      </Dialog.DialogDescription>
      <div className='flex h-min w-full items-center gap-10'>
        <div className='flex flex-col gap-4'>
          <PlantNameInput plant={plant} setPlant={setPlant} />
          <PlantSpeciesInput plant={plant} setPlant={setPlant} />
        </div>
        <div
          className={`relative flex h-32 w-32 items-center justify-center rounded-lg ${
            plant?.imageUrl
              ? ''
              : 'border-2 border-dashed border-foreground-grey'
          } text-foreground-grey`}
        >
          {plant?.imageUrl ? (
            <Image
              src={plant.imageUrl}
              fill
              sizes='(max-width: 300px) 100vw, 33vw'
              className='rounded-lg object-cover'
              alt={plant.name!}
            />
          ) : (
            <UploadImage onImageChange={handleImageChange} />
          )}
        </div>
      </div>
    </div>
  );
}

const UploadImage = ({
  onImageChange,
}: {
  onImageChange: (imageUrl: string) => void;
}) => {
  const [image, setImage] = useState<File>();

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const image = e.target.value;
    console.log(image);
  };

  return (
    <>
      <input type='file' name='file' onChange={handleImage} hidden />
      <Upload />
    </>
  );
};
