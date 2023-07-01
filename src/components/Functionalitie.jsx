import Image from "next/image";

export default function Functionalitie({name, icon, bg}){
    return(
        <div className={`bg-${bg} rounded-md h-11 w-40 flex items-center justify-between px-1 py-2 mx-2 my-5 shadow-button md:h-20 md:w-60 md:px-5 md:my-8 lg:mx-14 lg:my-6`}>
            <span className="font-bold text-white text-sm md:text-base">{name}</span>
            <div className="w-7 md:w-11 lg:w-14">
                <Image src={icon} alt="action icon" sizes="100vw" style={{width: '100%', height:'auto'}}/>
            </div>
        </div>
    )
}