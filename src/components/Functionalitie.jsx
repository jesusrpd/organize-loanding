import Image from "next/image";

export default function Functionalitie({name, icon, bg}){
    return(
        <div className={`bg-${bg} rounded-md h-11 w-40 flex items-center justify-between px-1 py-2 mx-2 my-5 shadow-button`}>
            <span className="font-bold text-white text-sm">{name}</span>
            <Image src={`/icons/${icon}.png`} alt="action icon" width={31} height={31}/>
        </div>
    )
}