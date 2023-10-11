"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

const Header: React.FC = () => {
  const routerPathname = usePathname();
  const isActive: (pathname: string) => boolean = (pathname) =>
  routerPathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <Link href="/">
        
          Feed
        
      </Link>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className="left">
        <Link href="/">
            Feed
        </Link>
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right">
        <Link href="/api/auth/signin">
          log in
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div className="left">
        <Link href="/">
          
            Feed
          
        </Link>
        <Link href="/drafts">
         My drafts
        </Link>
      </div>
    );
    right = (
      <div className="right">
        <p>
          {session.user!.name} ({session.user!.email})
        </p>
        <Link href="/create">
          Post
        </Link>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
      </div>
    );
  }

  return (
    <nav>
      {left}
      {right}
    </nav>
  );
};

export default Header;
