import Image from 'next/image'

export default function InputIcon({icon, placeholder}){
    return(
        <div className="relative my-5">
            <Image src={`/icons/${icon}.svg`} alt="icon user" width={84} height={84} className="absolute form-icon"/>
            <input type="text" placeholder={placeholder} className="bg-green-light text-gree px-1 pl-14 rounded-md shadow-button w-full py-4"/>
        </div>
    )
}