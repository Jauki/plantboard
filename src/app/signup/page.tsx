import { ArrowLeft, GitHub, Instagram } from 'react-feather';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className='flex flex-row justify-center items-center w-full h-screen  bg-primary'>
      <div className='flex flex-col bg-white w-1/3 h-auto rounded-lg p-8'>
        <Link
          href={'/'}
          className='text-sm text-primary font-medium w-min mb-8 flex bg-primary-light hover:bg-primary hover:text-white px-2 py-1 rounded-md transition-colors ease-in'
        >
          <div className='flex justify-center items-center'>
            <ArrowLeft size={16} />
          </div>
          Back
        </Link>
        <h1 className='text-3xl font-medium pb-2'>
          Join the <br /> Plant-enthusiasts
        </h1>
        <p className='text-foreground-grey text-sm font-light w-3/4'>
          Join our growing community of plant enthusiasts and embark on a
          greener adventure with{' '}
          <span className='text-primary'>Plantboard</span>. Sign up now and lets
          make your plant life a breeze!
        </p>
        <Link
          href='/api/auth/signin'
          className='bg-gray-900 rounded-md p-2 flex w-full text-white font-regular mt-8 cursor-pointer text-sm gap-2 justify-center'
        >
          <div className='flex justify-center items-center'>
            <GitHub size={16} />
          </div>
          Connect with Github
        </Link>
        <Link
          href='/api/auth/signin'
          className='bg-orange-400 rounded-md p-2 flex w-full text-white font-regular mt-2 cursor-pointer text-sm gap-2 justify-center'
        >
          <div className='flex justify-center items-center'>
            <Instagram size={16} />
          </div>
          Connect with Instagram
        </Link>
      </div>
    </div>
  );
}
