import Image from "next/image";
import { ChevronDown } from "react-feather";
import { Session } from "next-auth";

export const Profil = ({session}: {session: Session}) => {
    
    return session === undefined ? <ProfilSkeleton/> : <div className="flex gap-2 h-full max-h-10">
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


 