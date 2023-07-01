import Functionalitie from "@/components/Functionalitie"
import InputIcon from "@/components/InputIcon"
import NavBar from "@/components/NavBar"
import AboutUs from "@/layout/AboutUs"
import Main from "@/layout/Main"
import Image from 'next/image'
import AboutUsImg from '../../public/img/about-us.png'
import ActionIcon from '../../public/icons/action.png'
import PencilIcon from '../../public/icons/pencil.png'
import ClockIcon from '../../public/icons/clock.png'
import BinocleIcon from '../../public/icons/binocle.png'
import CalendarIcon from '../../public/icons/calendar.png'
import FilesIcon from '../../public/icons/files.png'
import CheckIcon from '../../public/icons/check.png'
import LockIcon from '../../public/icons/lock.png'
import RoutineIcon from '../../public/icons/routine.png'
import DesktopImg from '../../public/img/desktop.png'

export default function Home() {
  return (
    <>
        <NavBar/>
        {/* <Main/>
        <AboutUs/> */}
        <main className="w-full h-screen flex flex-col justify-start items-center pt-5 md:justify-center md:pt-0 lg:flex-row-reverse lg:justify-around">
            <div className="w-3/4 md:w-1/2 lg:w-1/3">
                <Image src={DesktopImg} alt='img organize' sizes="100vw" style={{width: '100%', height:'auto'}}/>
            </div>
            <div className='text-center mt-20'>
                <h1 className='font-bold text-5xl md:text-6xl lg:text-5xl'>ORGANIZE</h1>
                <p className='my-7 font-medium px-4 leading-10 md:text-xl md:leading-10 md:my-16 lg:my-4 lg:text-base'>La mejor forma de organizar tu vida <br className="hidden md:block"/> y encontrar el orden que necesitas.</p>
                <button className='bg-purple text-white px-7 py-1 font-bold rounded-xl shadow-button hover:bg-white hover:text-purple transition-all'>Comenzar</button>
            </div>
        </main>
        <section className="w-full h-screen py-4 px-4 flex flex-col items-center md:px-16 lg:flex-row">
            <h2 className="font-bold text-center text-4xl mb-5 md:text-5xl lg:hidden">Sobre Nosotros</h2>
            <div className="w-5/6 my-4 md:w-3/6 md:my-16 lg:w-1/2 lg:p-16">
                <Image src={AboutUsImg} alt="about us img" sizes="100vw" style={{width: '100%', height:'auto'}}/>
            </div>
            <p className="text-center font-medium my-7 leading-8 md:text-xl md:leading-10 lg:hidden">Somos una comunidad de desarrolladores, que busca ofrecer a las personas una herramienta para ayudarlos a mejorar su calidad de vida, ofreciéndoles herramientas para mantener un mejor orden y cuidado personal.</p><br />
            <p className="text-center font-medium leading-8 md:text-xl md:leading-10 lg:hidden"><span className="font-bold md:text-xl">ORGANIZE</span> cuenta con diversas funcionalidades, constantemente actualizamos la plataforma para ofrecer lo mejor a nuestros usuarios.</p>
            {/* VERSION ABOUT US DESKTOP */}
            <div className="hidden lg:w-1/2 lg:inline-block">
                <h2 className="font-bold text-center text-4xl mb-5">Sobre Nosotros</h2>
                <p className="text-center font-medium my-7 leading-8 lg:text-left">Somos una comunidad de desarrolladores, que busca ofrecer a las personas una herramienta para ayudarlos a mejorar su calidad de vida, ofreciéndoles herramientas para mantener un mejor orden y cuidado personal.</p><br />
                <p className="text-center font-medium leading-8 lg:text-left"><span className="font-bold md:text-xl">ORGANIZE</span> cuenta con diversas funcionalidades, constantemente actualizamos la plataforma para ofrecer lo mejor a nuestros usuarios.</p>
            </div>
        </section>
        <section className="w-full h-screen py-4 px-4 flex flex-col items-center md:px-16">
            <h2 className="font-bold text-center text-4xl mb-5 md:text-5xl lg:text-4xl">¿Qué es?</h2>
            <p className="text-center font-medium leading-8 my-10 md:text-xl md:leading-10 lg:text-base lg:w-9/12 lg:leading-10"><span className="font-bold md:text-xl lg:text-base">ORGANIZE</span> es una plataforma diseñada para mejorar la productividad, monitorear el sueño del usuario, establecer recordatorios y crear métodos para mantener tu concentración en tus pendientes etc. Tiene una infinidad de funcionalidades que puedes consultar en la sección de <span className="font-bold text-purple cursor-pointer md:text-xl lg:text-base lg:block">funcionalidades.</span></p>
            <p className="text-center font-medium leading-8 mb-5 md:text-xl md:leading-10 lg:text-base lg:w-9/12 lg:leading-10">Por el momento el sistema esta disponible en web, también se puede acceder a la plataforma desde tú teléfono móvil en el navegador. </p>
            <button className='bg-purple text-white px-7 py-1 font-bold rounded-xl shadow-button hover:bg-white hover:text-purple transition-all mt-10'>Comenzar</button>
        </section>
        <section className="w-full py-4 flex flex-col items-center">
            <h2 className="font-bold text-center text-4xl my-5 md:text-5xl lg:text-4xl">Funcionalidades</h2>
            <div className="w-full flex items-center flex-wrap justify-center md:mb-32">
                <Functionalitie name="Acciones" bg="green" icon={ActionIcon}/>
                <Functionalitie name="Pendientes" bg="purple" icon={PencilIcon}/>
                <Functionalitie name="Recordatorios" bg="green" icon={ClockIcon}/>
                <Functionalitie name="Sueño Monitoreo" bg="purple" icon={BinocleIcon}/>
                <Functionalitie name="Calendarios" bg="green" icon={CalendarIcon}/>
                <Functionalitie name="Sistema Archivos" bg="purple" icon={FilesIcon}/>
                <Functionalitie name="Metricas" bg="green" icon={CheckIcon}/>
                <Functionalitie name="Sistema Ayuda" bg="purple" icon={LockIcon}/>
                <Functionalitie name="Rutinas" bg="green" icon={RoutineIcon}/>
            </div>
        </section>
        <section className="w-full py-4 flex flex-col items-center min-h-screen px-2 pb-10 md:px-16 lg:flex-row lg:justify-between">
            <div className="lg:w-3/5">
                <h2 className="font-bold text-center text-4xl my-5 md:text-5xl lg:text-4xl lg:mb-16 lg:text-left">¡¡Colabora!!</h2>
                <p className="font-medium leading-8 mb-5 text-center md:text-xl md:leading-10 lg:text-base lg:leading-10 lg:text-left lg:pr-40">Si quieres ayudar en el desarrollo y progreso de este proyecto... llena el siguiente formulario, déjanos tu comentario y tu rol de especialidad. No necesitas tener mucha experiencia o si eres nuevo en tu área como Desarrollo Web, DevOps, Diseño, Marketing, Project Manager, Qa Testing etc. </p>
                <p className="font-medium leading-8 text-center md:text-xl md:leading-10 lg:text-base lg:leading-10 lg:text-left lg:pr-40">Para <span className="font-bold md:text-xl lg:text-base">ORGANIZE</span> será un placer tenerte en nuestro equipo y que puedas sumar experiencia con nosotros!!</p>
            </div>
            <form className="w-full px-2 lg:w-2/5">
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
        <footer className="bg-green py-5 px-3 pb-12 flex flex-col justify-around items-center lg:flex-row">
            <div className="my-5">
                <h3 className="text-5xl font-bold text-white md:text-6xl lg:text-5xl">ORGANIZE</h3>
                <p className="text-white text-center mt-4 md:text-xl md:leading-10 lg:text-base">Manten un orden en tu vida.</p>
            </div>
            <ul className="my-5">
                <li className="my-4 font-bold text-3xl text-purple"><p className="text-white md:text-xl md:leading-10 lg:text-base">Sobre nosotros</p></li>
                <li className="my-4 font-bold text-3xl text-purple"><p className="text-white md:text-xl md:leading-10 lg:text-base">¿Qué es?</p></li>
                <li className="my-4 font-bold text-3xl text-purple"><p className="text-white md:text-xl md:leading-10 lg:text-base">Funcionalidades</p></li>
                <li className="my-4 font-bold text-3xl text-purple"><p className="text-white md:text-xl md:leading-10 lg:text-base">Colabora</p></li>
            </ul>
            <div className="my-5">
                <p className="text-white my-4 text-center md:text-xl md:leading-10 lg:text-base">Creado por <span className="font-bold text-white md:text-xl lg:text-base">Jesús Rodrigo.</span></p>
                <p className="text-white my-4 text-center md:text-xl md:leading-10 lg:text-base">Términos y Condiciones.</p>
                <p className="text-white my-4 text-center md:text-xl md:leading-10 lg:text-base">Ayuda.</p>
            </div>
        </footer>
    </>
  )
}
