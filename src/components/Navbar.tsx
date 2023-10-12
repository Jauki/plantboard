"use client";

import Link from "next/link";
import Searchbar from "./navbar/Searchbar";
import {MessageCircle, Info, ChevronDown} from "react-feather";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/image";


const Navbar: React.FC = () => {
    const { data: session, status } = useSession();
    return (
        <nav className="max-w-[1728px] px-12 py-8 grid grid-cols-8 gap-6 items-center">
            <h1 className="text-3xl font-medium">Plantboard</h1>
            <Searchbar/>
            <button className="bg-primary-light rounded-md h-full text-primary">Add Room</button>
            <Link href={"/feedback"} className="flex gap-2 col-start-6 hover:bg-background-grey transition-colors ease-in h-full p-2 rounded-md" >
                <MessageCircle/>
                Give us Feedback
            </Link>
            <Link href={"/feedback"} className="flex gap-2  hover:bg-background-grey transition-colors ease-in h-full p-2 rounded-md" >
                <Info/>
                Help & Support
            </Link>
            <AuthenticationStatusSwitch status={status} session={session!}/>
        </nav>
      );
}

const AuthenticationStatusSwitch = ({status, session}: {status: "unauthenticated" | "loading" | "authenticated", session: Session}) => {
    switch (status) {
      case "unauthenticated":
        return <div>Signup</div>;
      case "loading":
        return <ProfilSkeleton/>;
      case "authenticated":
        return <Profil session={session}/>
        return <ProfilSkeleton/>;
      default:
        return <div className="p-2 text-red-600 bg-red-200 font-semibold flex justify-center items-center h-full">ERROR</div>;
    }
  };

const Profil = ({session}: {session: Session}) => {
    return <div className="flex gap-2 h-full max-h-10">
        <div className="relative aspect-square h-full">
            <Image alt={session.user?.name ?? "foo"} src={session.user?.image ?? "foo"} fill className="rounded-md"/>
        </div>
        <div className="flex flex-col">
            <div>{session.user?.name}</div>
            <div className="text-xs text-foreground-grey font-light">Plantdad 🌿</div>
        </div>
        <div className="text-foreground-grey self-center place-self-end">
        <ChevronDown />
        </div>
    </div>
}

const ProfilSkeleton = () => {
    return (
      <div className="flex gap-2 h-full">
        <div className="bg-background-grey aspect-square animate-pulse h-full rounded-md"></div>
        <div className="flex flex-col gap-1 h-full">
          <div className="bg-background-grey animate-pulse h-6 w-32 rounded"></div>
          <div className="bg-background-grey animate-pulse h-3 w-20 rounded"></div>
        </div>
    
      </div>
    );
  };
export default Navbar;