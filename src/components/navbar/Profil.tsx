"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, User, LogOut, Moon } from "react-feather";
import { Session } from "next-auth";
import { useAnimation, motion } from "framer-motion";
import { useState } from "react";
import * as Switch from "@radix-ui/react-switch";


export const Profil = ({session}: {session: Session}) => {
    
    return session === undefined ? <ProfilSkeleton/> :
      <ProfilAnimated session={session}/>
}

export const ProfilSkeleton = () => {
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

const ProfilAnimated = ({session}: {session: Session}) => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const handleDropdownClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <motion.div
      className={`relative p-2 hover:bg-background-grey  rounded-md ${!isOpen && 'bg-background-grey'}`}
      initial={false}
      animate={controls}
    >
      <div
        className={`flex gap-2.5 h-full max-h-10 transition-colors cursor-pointer ease-in rounded-md`}
        onClick={handleDropdownClick}
      >
        <div className="flex justify-center items-center ">
            <Image alt={session.user?.name ?? 'foo'} src={session.user?.image ?? 'foo'} width={36} height={36} className="rounded-md" />
        </div>
        <div className="flex flex-col items-start">
          <div className="text-sm">{session.user?.name}</div>
          <div className="text-xs text-foreground-grey font-light">Plantdad 🌿</div>
        </div>
      </div>
      <motion.div
        className={`absolute z-20 bg-background-grey flex p-2 flex-col rounded-b-md left-0 w-full `}
        initial="closed" 
        animate={isOpen ? 'open' : 'closed'} 
        variants={{
          open: { height: 0,  opacity: 0},
          closed: { height: 'auto',  opacity: 100 },
        }}
        transition={{ duration: 0.2 }} 
      >
        <div className="flex font-light flex-row gap-1 p-2 h-min text-sm">
          <div className="flex justify-center items-center">
          <User size={16}/>
          </div>
           Account Settings
        </div>
        <div className="flex font-light flex-row gap-1 p-2 h-min text-sm">
          <div className="flex justify-center items-center">
          <Moon size={16}/>
          </div>
           Dark mode
           <div className="w-10 flex place-content-end">
           <Switch.Root
      className="group radix-state-checked:bg-primary radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-800 relative inline-flex  w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <Switch.Thumb
                className=
                  "group-radix-state-checked:translate-x-3 group-radix-state-unchecked:translate-x-0 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                
              />
          </Switch.Root>
           </div>
        </div>
        <div className="bg-gray-300 my-2 h-[1px]"></div>
        <Link href={'/logout'} className="flex font-light flex-row gap-1 p-2 h-min text-sm">
          <div className="flex justify-center items-center">
          <LogOut size={16}/>
          </div>
           Log out
        </Link>
      </motion.div>
    </motion.div>
  );
}


 /**
  * <DropdownMenu.Portal>
            <DropdownMenu.Content className=" bg-white text-sm font-light  border-background-grey border p-2 rounded-md w-full" align="end" side="bottom">
              <DropdownMenu.Item className="flex flex-row gap-1 p-1">
                <div className="flex justify-center items-center hover:bg-background-grey transition-colors ease-in">
                  <User size={16}/>  
                </div>
                <div>Account Settings</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="flex flex-row gap-1 p-1">
                <div className="flex justify-center items-center hover:bg-background-grey transition-colors ease-in">
                  <Moon size={16}/>  
                </div>
                <div>Dark mode</div>
                <Switch.Root>
                  <Switch.Thumb />
                </Switch.Root>
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="bg-black"/>
              <DropdownMenu.Item className="flex flex-row gap-1 p-1 bg-red-100 text-red-600 rounded font-normal">
                <div className="flex justify-center items-center">
                  <LogOut size={16}/>  
                </div>
                <div>Signout</div>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal> 
      
  */