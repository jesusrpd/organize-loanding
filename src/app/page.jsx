import NavBar from "@/components/NavBar"
import AboutUs from "@/layout/AboutUs"
import Main from "@/layout/Main"
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <NavBar/>
      {/* <Main/>
      <AboutUs/> */}
      <main className="w-full h-screen flex flex-col justify-start items-center pt-5">
            <Image src="/img/desktop.png" alt='img organize' width={300} height={300}/>
            <div className='text-center mt-20'>
                <h1 className='font-bold text-5xl'>ORGANIZE</h1>
                <p className='my-7 font-medium'>La mejor forma de organizar tu vida y encontrar el orden que necesitas.</p>
                <button className='bg-purple text-white px-7 py-1 font-bold rounded-xl shadow-button hover:bg-white hover:text-purple transition-all'>Comenzar</button>
            </div>
        </main>
      <section className="w-full h-screen py-4 px-4 flex flex-col items-center">
            <h2 className="font-bold text-center text-4xl mb-5">Sobre Nosotros</h2>
            <Image src="/img/about-us.png" alt="about us img" width={212} height={175}/>
            <p className="text-center font-medium my-5 leading-8">Somos una comunidad de desarrolladores, que busca ofrecer a las personas una herramienta para ayudarlos a mejorar su calidad de vida, ofreciéndoles herramientas para mantener un mejor orden y cuidado personal.</p><br />
            <p className="text-center font-medium leading-8">ORGANIZE cuenta con diversas funcionalidades, constantemente actualizamos la plataforma para ofrecer lo mejor a nuestros usuarios.</p>
        </section>
    </>
  )
}
