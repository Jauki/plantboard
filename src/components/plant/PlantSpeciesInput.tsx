import { recommendExternalSpeciesSearch } from '@/server/actions';
import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plant } from '@prisma/client';

export const PlantSpeciesInput = ({
  setPlant,
  plant,
}: {
  setPlant: (
    plant:
      | Partial<Plant>
      | undefined
      | ((prevVar: Partial<Plant> | undefined) => Partial<Plant>)
  ) => void;
  plant: Partial<Plant> | undefined;
}) => {
  const [open, setOpen] = useState<boolean>(true);
  const [recommendation, setRecommendation] = useState<string>(
    plant?.familyCommonName ?? ''
  );
  const { data, isFetched } = useQuery({
    queryKey: ['externalPlantspecies', recommendation],
    queryFn: () => recommendExternalSpeciesSearch(recommendation),
  });

  useEffect(() => {
    setRecommendation(plant?.family ?? '');
    setOpen(false);
  }, [plant]);

  const selectHandler = (plantName: string) => {
    setRecommendation(plantName);
    setOpen(false);
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRecommendation(e.target.value);
    setOpen(true);
  };

  return (
    <div className='relative flex flex-col gap-1'>
      <label>Species:*</label>
      <input
        type='text'
        name='plantspecies'
        required
        value={recommendation}
        onChange={inputHandler}
        className={`focus:border-1 w-full rounded-md border border-background-grey px-2 py-1 transition-all focus:border-background-grey focus:outline-2 focus:outline-primary focus:ring-0`}
      />
      {data?.data.length !== 0 && isFetched && open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='absolute bottom-0 z-20 flex w-full translate-y-full flex-col gap-1 rounded-md bg-white p-2 shadow-md'
        >
          <AnimatePresence>
            {data?.data.map((plant, k: number) => (
              <motion.div
                key={plant.id! + k}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='cursor-pointer rounded-md px-2 py-1 hover:bg-primary hover:bg-opacity-10 hover:text-primary focus:ring-primary'
                onClick={() => selectHandler(plant.name!)}
              >
                {plant.name}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </div>
  );
};
