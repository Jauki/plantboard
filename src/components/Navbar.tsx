'use client';

import Link from 'next/link';
import Searchbar from './navbar/Searchbar';
import { MessageCircle, Info, GitHub } from 'react-feather';
import { Session } from 'next-auth';
import { Profil } from './navbar/Profil';
import * as Toast from '@radix-ui/react-toast';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className='grid max-w-[1728px] grid-cols-8 items-center gap-6 px-12 py-8'>
      <h1 className='text-3xl font-medium'>Plantboard</h1>
      <Searchbar />
      <button className='rounded-md bg-primary-light  py-2 text-primary transition-colors ease-out hover:bg-primary hover:text-white'>
        plant a Plant
      </button>
      <Link
        href={'/feedback'}
        className='col-start-6 flex h-min items-center gap-2 rounded-md p-2 py-2 transition-colors ease-in hover:bg-background-grey'
      >
        <MessageCircle />
        Give us Feedback
      </Link>
      <Link
        href={'/feedback'}
        className='flex h-min items-center gap-2 rounded-md p-2 py-2 transition-colors  ease-in hover:bg-background-grey'
      >
        <Info />
        Help & Support
      </Link>
      <AuthenticationStatusSwitch status={status} session={session!} />
    </nav>
  );
};

const AuthenticationStatusSwitch = ({
  status,
  session,
}: {
  status: 'unauthenticated' | 'loading' | 'authenticated';
  session: Session;
}) => {
  return status === 'unauthenticated' ? (
    <Link
      href='/api/auth/signin'
      className='font-regular flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-900 p-2 text-sm text-white'
    >
      <div className='flex items-center justify-center'>
        <GitHub size={16} />
      </div>
      Connect with Github
    </Link>
  ) : (
    <Profil session={session} />
  );
};

export default Navbar;
