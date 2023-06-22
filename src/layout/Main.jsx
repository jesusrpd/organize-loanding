import Image from 'next/image'

export default function Main(){
    return(
        <main className="w-full h-screen flex flex-col justify-start items-center pt-5">
            <Image src="/img/desktop.png" alt='img organize' width={300} height={300}/>
            <div className='text-center mt-20'>
                <h1 className='font-bold text-5xl'>ORGANIZE</h1>
                <p className='my-7 font-medium'>La mejor forma de organizar tu vida y encontrar el orden que necesitas.</p>
                <button className='bg-purple text-white px-7 py-1 font-bold rounded-xl shadow-button hover:bg-white hover:text-purple transition-all'>Comenzar</button>
            </div>
        </main>
    )
}