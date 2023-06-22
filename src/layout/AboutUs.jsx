import Image from "next/image";

export default function AboutUs(){
    return(
        <section className="w-full h-screen py-4 flex flex-col items-center">
            <h2 className="font-bold text-center">Sobre Nosotros</h2>
            <Image src="/img/about-us.png" alt="about us img" width={182} height={145}/>
            <p className="text-center font-medium my-2">Somos una comunidad de desarrolladores, que busca ofrecer a las personas una herramienta para ayudarlos a mejorar su calidad de vida, ofreciéndoles herramientas para mantener un mejor orden y cuidado personal.</p><br/>
            <p className="text-center font-medium my-2">ORGANIZE cuenta con diversas funcionalidades, constantemente actualizamos la plataforma para ofrecer lo mejor a nuestros usuarios.</p>
        </section>
    )
}