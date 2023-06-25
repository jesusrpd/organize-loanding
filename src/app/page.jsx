import Functionalitie from "@/components/Functionalitie"
import InputIcon from "@/components/InputIcon"
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
                <p className='my-7 font-medium px-4 leading-10'>La mejor forma de organizar tu vida y encontrar el orden que necesitas.</p>
                <button className='bg-purple text-white px-7 py-1 font-bold rounded-xl shadow-button hover:bg-white hover:text-purple transition-all'>Comenzar</button>
            </div>
        </main>
        <section className="w-full h-screen py-4 px-4 flex flex-col items-center">
            <h2 className="font-bold text-center text-4xl mb-5">Sobre Nosotros</h2>
            <Image src="/img/about-us.png" alt="about us img" width={212} height={175}/>
            <p className="text-center font-medium my-7 leading-8">Somos una comunidad de desarrolladores, que busca ofrecer a las personas una herramienta para ayudarlos a mejorar su calidad de vida, ofreciéndoles herramientas para mantener un mejor orden y cuidado personal.</p><br />
            <p className="text-center font-medium leading-8"><span className="font-bold">ORGANIZE</span> cuenta con diversas funcionalidades, constantemente actualizamos la plataforma para ofrecer lo mejor a nuestros usuarios.</p>
        </section>
        <section className="w-full h-screen py-4 px-4 flex flex-col items-center">
            <h2 className="font-bold text-center text-4xl mb-5">¿Qué es?</h2>
            <p className="text-center font-medium leading-8 my-10"><span className="font-bold">ORGANIZE</span> es una plataforma diseñada para mejorar la productividad, monitorear el sueño del usuario, establecer recordatorios y crear métodos para mantener tu concentración en tus pendientes etc. Tiene una infinidad de funcionalidades que puedes consultar en la sección de <span className="font-bold text-purple cursor-pointer">funcionalidades.</span></p>
            <p className="text-center font-medium leading-8 mb-5">Por el momento el sistema esta disponible en web, también se puede acceder a la plataforma desde tú teléfono móvil en el navegador. </p>
            <button className='bg-purple text-white px-7 py-1 font-bold rounded-xl shadow-button hover:bg-white hover:text-purple transition-all mt-10'>Comenzar</button>
        </section>
        <section className="w-full py-4 flex flex-col items-center">
            <h2 className="font-bold text-center text-4xl my-5">Funcionalidades</h2>
            <div className="w-full flex items-center flex-wrap justify-center">
                <Functionalitie name="Acciones" bg="green" icon="action"/>
                <Functionalitie name="Pendientes" bg="purple" icon="pencil"/>
                <Functionalitie name="Recordatorios" bg="green" icon="clock"/>
                <Functionalitie name="Sueño Monitoreo" bg="purple" icon="binocle"/>
                <Functionalitie name="Calendarios" bg="green" icon="calendar"/>
                <Functionalitie name="Sistema Archivos" bg="purple" icon="files"/>
                <Functionalitie name="Metricas" bg="green" icon="check"/>
                <Functionalitie name="Sistema Ayuda" bg="purple" icon="lock"/>
                <Functionalitie name="Rutinas" bg="green" icon="routine"/>
            </div>
        </section>
        <section className="w-full py-4 flex flex-col items-center min-h-screen px-2">
            <h2 className="font-bold text-center text-4xl my-5">¡¡Colabora!!</h2>
            <p className="font-medium leading-8 mb-5 text-center">Si quieres ayudar en el desarrollo y progreso de este proyecto... llena el siguiente formulario, déjanos tu comentario y tu rol de especialidad. No necesitas tener mucha experiencia o si eres nuevo en tu área como Desarrollo Web, DevOps, Diseño, Marketing, Project Manager, Qa Testing etc. </p>
            <p className="font-medium leading-8 text-center">Para <span className="font-bold">ORGANIZE</span> será un placer tenerte en nuestro equipo y que puedas sumar experiencia con nosotros!!</p>
            <form className="w-full px-2">
                <InputIcon icon="user" placeholder="Nombre"/>
                <InputIcon icon="gmail" placeholder="Correo Eléctronico"/>
                <div className="relative my-5">
                    <Image src="/icons/rol.svg" alt="icon user" width={84} height={84} className="absolute form-icon"/>
                    <select className="bg-green-light text-gree px-1 pl-14 rounded-md shadow-button w-full py-4">
                    <option value="">Rol de Interés</option>
                        <option value="">Desarrollador</option>
                        <option value="">Diseñador</option>
                        <option value="">Marketing</option>
                        <option value="">Idea independiente</option>
                    </select>
                </div>
                <div className="relative my-5">
                    <Image src="/icons/speaker.svg" alt="icon user" width={84} height={84} className="absolute form-icon"/>
                    <textarea cols="30" rows="10" className="bg-green-light text-gree px-1 pl-14 rounded-md shadow-button w-full py-4" placeholder="Déjanos algún comentario"></textarea>
                </div>
                <button type="submit" className='bg-purple text-white px-7 py-1 font-bold rounded-md shadow-button hover:bg-white hover:text-purple transition-all'>Enviar</button>
            </form>
        </section>
    </>
  )
}
