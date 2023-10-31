'use client';

import { useState } from 'react';
import { Filter } from 'react-feather';


const Searchbar = () => {
  const [query, setQuery] = useState('');

  return (
    <div className='col-span-2 flex gap-2'>
        <input
          name='plantSearch'
          placeholder='Search a plant...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='focus:border-1 w-full rounded-md border border-background-grey px-2 py-1 transition-all focus:border-background-grey focus:outline-2 focus:outline-primary focus:ring-0'
        />
        <div className='flex aspect-square w-10 items-center justify-center rounded-lg bg-primary text-white'>
          <Filter size={18} />
        </div>
    
    </div>
  );
};

export default Searchbar;
