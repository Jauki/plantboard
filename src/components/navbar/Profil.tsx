'use client';
import Image from 'next/image';
import { User, LogOut, Moon } from 'react-feather';
import { Session } from 'next-auth';
import { useAnimation, motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { signOut } from 'next-auth/react';

export const Profil = ({ session }: { session: Session }) => {
  return session === undefined ? (
    <ProfilSkeleton />
  ) : (
    <ProfilAnimated session={session} />
  );
};

export const ProfilSkeleton = () => {
  return (
    <div className='flex h-12 gap-2 p-1.5'>
      <div className='aspect-square h-full animate-pulse rounded-md bg-background-grey'></div>
      <div className='flex h-full flex-col gap-1'>
        <div className='h-6 w-32 animate-pulse rounded bg-background-grey'></div>
        <div className='h-3 w-20 animate-pulse rounded bg-background-grey'></div>
      </div>
    </div>
  );
};

// todo: fixme Animat on Apperance or smth like that
const ProfilAnimated = ({ session }: { session: Session }) => {
  const [isOpen, setIsOpen] = useState(true);
  const controls = useAnimation();

  const handleDropdownClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <motion.div
      className={`relative rounded-md p-1.5  hover:bg-background-grey ${
        !isOpen && 'bg-background-grey'
      }`}
      initial={true}
      animate={controls}
    >
      <div
        className={`flex max-h-10 cursor-pointer gap-2 rounded-md transition-colors ease-in`}
        onClick={handleDropdownClick}
      >
        <div className='flex items-center justify-center '>
          <Image
            alt={session.user?.name ?? 'foo'}
            src={session.user?.image ?? 'foo'}
            width={36}
            height={36}
            className='rounded-md'
          />
        </div>
        <div className='flex flex-col items-start'>
          <div className='text-sm'>{session.user?.name}</div>
          <div className='text-xs font-light text-foreground-grey'>
            Plantdad 🌿
          </div>
        </div>
      </div>
      <motion.div
        className={`absolute left-0 z-20 flex  w-full flex-col rounded-b-md bg-background-grey `}
        initial='open'
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { height: 0, opacity: 0 },
          closed: { height: 'auto', opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className='flex h-min flex-row gap-1 p-2 text-sm font-light'>
          <div className='flex items-center justify-center'>
            <User size={16} />
          </div>
          Account Settings
        </div>
        <div className='flex h-min flex-row gap-1 p-2 text-sm font-light'>
          <div className='flex items-center justify-center'>
            <Moon size={16} />
          </div>
          Dark mode
          <div className='flex w-10 place-content-end'>
            <Switch.Root className='group relative inline-flex w-8 flex-shrink-0 cursor-pointer  rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 radix-state-checked:bg-primary radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-800'>
              <Switch.Thumb className='pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-radix-state-checked:translate-x-3 group-radix-state-unchecked:translate-x-0' />
            </Switch.Root>
          </div>
        </div>
        <div className='my-2 h-[1px] bg-gray-300'></div>
        <div
          onClick={() => signOut()}
          className='mx-2 my-2 flex h-min cursor-pointer flex-row gap-1 rounded-md px-1.5 py-2 text-sm font-light transition-colors ease-in hover:bg-gray-300'
        >
          <div className='flex items-center justify-center'>
            <LogOut size={16} />
          </div>
          Log out
        </div>
      </motion.div>
    </motion.div>
  );
};
