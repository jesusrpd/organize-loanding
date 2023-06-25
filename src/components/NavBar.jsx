export default function NavBar(){
    return(
        <nav className="bg-green w-full h-fit py-4 fixed bottom-0 left-0 px-5 flex flex-col items-center z-10">
            <input type="checkbox" className="nav-check" id="check-nav"/>
            <ul className="nav-links mb-10 text-center">
                <li className="text-white font-medium my-4">Home</li>
                <li className="text-white font-medium my-4">Sobre Nosotros</li>
                <li className="text-white font-medium my-4">¿Qué es?</li>
                <li className="text-white font-medium my-4">Funcionalidades</li>
                <li className="text-white font-medium my-4">¡¡Colabora!!</li>
            </ul>
            <div className="w-full flex justify-between content-hamburguer">
                <p className="font-bold text-white">ORGANIZE</p>
                <label className="nav-hamburguer" htmlFor="check-nav">
                    <div className="w-7 my-1 bg-white h-1 rounded-full"></div>
                    <div className="w-7 my-1 bg-white h-1 rounded-full"></div>
                    <div className="w-7 my-1 bg-white h-1 rounded-full"></div>
                </label>
            </div>
        </nav>
    )
}