"use client";

import Link from "next/link";
import Searchbar from "./navbar/Searchbar";
import {MessageCircle, Info, ChevronDown} from "react-feather";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { Profil } from "./navbar/Profil";


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
    return status === "unauthenticated" ? <Link href={"/signup"}>Signup</Link> : <Profil session={session}/>
}


export default Navbar;