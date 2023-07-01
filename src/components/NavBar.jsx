import Link from "next/link"

export default function NavBar(){
    return(
        <nav className="bg-green w-full h-fit py-4 fixed bottom-0 left-0 px-5 flex flex-col items-center z-10 md:top-0 md:bg-transparent md:flex-row md:justify-between md:p-5 md:px-8 lg:pt-8 lg:px-16">
            <p className="font-bold text-xl hidden md:block">ORGANIZE</p>
            <ul className="hidden md:flex list-none">
                <li className="text-text font-bold nav-links-desk mx-2 lg:mx-4"><Link href="/">Home</Link></li>
                <li className="text-text font-bold nav-links-desk mx-2 lg:mx-4"><Link href="/">Sobre Nosotros</Link></li>
                <li className="text-text font-bold nav-links-desk mx-2 lg:mx-4"><Link href="/">¿Qué es?</Link></li>
                <li className="text-text font-bold nav-links-desk mx-2 lg:mx-4"><Link href="/">Funcionalidades</Link></li>
                <li className="text-text font-bold nav-links-desk mx-2 lg:mx-4"><Link href="/">¡¡Colabora!!</Link></li>
            </ul>
            <input type="checkbox" className="nav-check md:hidden" id="check-nav"/>
            <ul className="nav-links mb-10 text-center md:hidden">
                <li className="text-white font-medium my-4">Home</li>
                <li className="text-white font-medium my-4">Sobre Nosotros</li>
                <li className="text-white font-medium my-4">¿Qué es?</li>
                <li className="text-white font-medium my-4">Funcionalidades</li>
                <li className="text-white font-medium my-4">¡¡Colabora!!</li>
            </ul>
            <div className="w-full flex justify-between content-hamburguer md:hidden">
                <p className="font-bold text-white md:hidden">ORGANIZE</p>
                <label className="nav-hamburguer md:hidden" htmlFor="check-nav">
                    <div className="w-7 my-1 bg-white h-1 rounded-full"></div>
                    <div className="w-7 my-1 bg-white h-1 rounded-full"></div>
                    <div className="w-7 my-1 bg-white h-1 rounded-full"></div>
                </label>
            </div>
        </nav>
    )
}