"use client";

import { useQuery } from '@tanstack/react-query';
import { getExternalPlants } from '@/app/actions';

export default function Plant({ plants }: { plants: any }) {
  const { data, error, isFetched } = useQuery({
    queryKey: ['plants'],
    queryFn: getExternalPlants,
    initialData: plants,
  });

  return <pre>{JSON.stringify(data)}</pre>;
}
