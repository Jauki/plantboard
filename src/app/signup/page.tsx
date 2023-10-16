import { ArrowLeft, GitHub, Instagram } from 'react-feather';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className='flex h-screen w-full flex-row items-center justify-center  bg-primary'>
      <div className='flex h-auto w-1/3 flex-col rounded-lg bg-white p-8'>
        <Link
          href={'/'}
          className='mb-8 flex w-min rounded-md bg-primary-light px-2 py-1 text-sm font-medium text-primary transition-colors ease-in hover:bg-primary hover:text-white'
        >
          <div className='flex items-center justify-center'>
            <ArrowLeft size={16} />
          </div>
          Back
        </Link>
        <h1 className='pb-2 text-3xl font-medium'>
          Join the <br /> Plant-enthusiasts
        </h1>
        <p className='w-3/4 text-sm font-light text-foreground-grey'>
          Join our growing community of plant enthusiasts and embark on a
          greener adventure with{' '}
          <span className='text-primary'>Plantboard</span>. Sign up now and lets
          make your plant life a breeze!
        </p>
        <Link
          href='/api/auth/signin'
          className='font-regular mt-8 flex w-full cursor-pointer justify-center gap-2 rounded-md bg-gray-900 p-2 text-sm text-white'
        >
          <div className='flex items-center justify-center'>
            <GitHub size={16} />
          </div>
          Connect with Github
        </Link>
        <Link
          href='/api/auth/signin'
          className='font-regular mt-2 flex w-full cursor-pointer justify-center gap-2 rounded-md bg-orange-400 p-2 text-sm text-white'
        >
          <div className='flex items-center justify-center'>
            <Instagram size={16} />
          </div>
          Connect with Instagram
        </Link>
      </div>
    </div>
  );
}
