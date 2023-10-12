
"use client";

const Searchbar: React.FC = () => {
    return (
        <div className="col-span-2 flex gap-2 p-2 font-normal bg-background-grey rounded-md">
            <div className="w-6 h-6 flex justify-center items-center rounded bg-primary-light">🪴</div>
            <input className="p-0 border-none focus:ring-0 bg-transparent font-light text-black w-full" placeholder="Living Room"/>
        </div>
      );
}

export default Searchbar;