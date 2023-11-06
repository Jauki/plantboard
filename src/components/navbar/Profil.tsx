'use client';
import Image from 'next/image';
import {
  User,
  LogOut,
  Moon,
  X,
  UserPlus,
  Bell,
  Bookmark,
  Smile,
  Users,
  Heart,
  Home,
} from 'react-feather';
import { Session } from 'next-auth';
import { useAnimation, motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

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

const ProfilAnimated = ({ session }: { session: Session }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    console.log('clicked');
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <div
        className={`flex h-12 cursor-pointer gap-2 rounded-md p-1 transition-colors ease-in hover:bg-background-grey `}
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
      {isOpen && (
        <CollapsedSideBarProfile
          session={session}
          handleDropdownClick={handleDropdownClick}
        />
      )}
    </div>
  );
};

const CollapsedSideBarProfile = ({
  session,

  handleDropdownClick,
}: {
  session: Session;

  handleDropdownClick: () => void;
}) => {
  return (
    <>
      <div className='absolute left-0 top-0 z-0 h-screen w-screen bg-black opacity-20'></div>
      <div
        className={`absolute right-0 top-0 flex h-screen w-[300px] flex-col gap-2 rounded-l-xl border border-l-background-grey bg-white px-4 py-8`}
      >
        <div className='flex justify-between'>
          <div className={`flex gap-2 rounded-md`}>
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
                {session.user?.email}
              </div>
            </div>
          </div>
          <button
            onClick={handleDropdownClick}
            className='flex aspect-square items-center justify-center rounded-md bg-background-grey p-2 text-foreground-grey hover:bg-gray-300'
          >
            <X size={18} />
          </button>
        </div>
        <div className='mt-4  flex h-8 w-full cursor-pointer items-center gap-2 rounded-md px-2 text-sm font-light hover:bg-background-grey'>
          {
            // Todo: add Status
          }
          <div>🌵</div> <span>plantdad</span>
        </div>

        <section id='Account' className='flex flex-col gap-0'>
          <div className='my-2 h-[1px] bg-gray-300'></div>
          <ItemWithIcon icon={<User size={16} />} text='Your Profile' />
          <ItemWithIcon icon={<UserPlus size={16} />} text='Add account' />
        </section>

        <section id='User' className='flex flex-col gap-0'>
          <div className='my-2 h-[1px] bg-gray-300'></div>
          <ItemWithIcon icon={<Heart size={16} />} text='Your Plants' />
          <ItemWithIcon icon={<Home size={16} />} text='Your Rooms' />
          <ItemWithIcon icon={<Bookmark size={16} />} text='Your Wishlist' />
          <ItemWithIcon icon={<Users size={16} />} text='Your Housemates' />
          <ItemWithIcon icon={<Smile size={16} />} text='Your Friends' />
        </section>

        <section id='Preferences' className='flex flex-col gap-0'>
          <div className='my-2 h-[1px] bg-gray-300'></div>
          <ItemWithIcon icon={<Bell size={16} />} text='Notifications' />
          <div className='flex h-8 w-full cursor-pointer items-center gap-1 rounded-md px-2 text-sm font-light hover:bg-background-grey'>
            <div className='flex items-center justify-center text-gray-500'>
              <Moon size={16} />
            </div>
            Dark mode
            <div className='flex w-10 place-content-end'>
              <Switch.Root className='group relative inline-flex w-8 flex-shrink-0 cursor-pointer  rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 radix-state-checked:bg-primary radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-800'>
                <Switch.Thumb className='pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-radix-state-checked:translate-x-3 group-radix-state-unchecked:translate-x-0' />
              </Switch.Root>
            </div>
          </div>
        </section>

        <div
          onClick={() => signOut()}
          className='flex mt-auto h-8 w-full cursor-pointer items-center gap-1 rounded-md px-2 text-sm font-light hover:bg-background-grey'
        >
          <div className='flex items-center justify-center text-gray-500'>
            <LogOut size={16} />
          </div>
          Log out
        </div>
      </div>
    </>
  );
};

const ItemWithIcon = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => {
  return (
    <ItemWrapper href={href}>
      <div className='flex items-center justify-center text-gray-500'>
        {icon}
      </div>
      <span className='select-none'>{text}</span>
    </ItemWrapper>
  );
};

const ItemWrapper = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) =>
  href ? (
    <Link
      className='flex h-8 w-full cursor-pointer select-none items-center gap-1 rounded-md px-2 text-sm font-light hover:bg-background-grey'
      href={href}
    >
      {children}
    </Link>
  ) : (
    <div className='flex h-8 w-full cursor-pointer select-none items-center gap-1 rounded-md px-2 text-sm font-light hover:bg-background-grey'>
      {children}
    </div>
  );
