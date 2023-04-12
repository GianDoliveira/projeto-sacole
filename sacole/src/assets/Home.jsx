import "../App.css"
import Navbar from "./Navbar.jsx"

import { Link } from "react-scroll"

export default function Home() {
    return (
        <section className="flex justify-center">
            <Navbar />
            <div className="flex flex-col justify-center items-center text-center">
                <div>
                    <h1 className="text-3xl font-['Alkatra'] text-center relative top-64 text-orange-200 text">Refresque-se com nossos deliciosos <b className="text-orange-300">Sacolés!</b></h1>
                </div>
                <button
                    className="relative top-80  bg-orange-300 p-5 rounded-lg animate-bounce ring-offset-2 ring">
                    <Link activeClass="active" to="flavors" spy={true} smooth={true} offset={50} duration={1100} data-text="ToBottom">Desce a página</Link>
                </button>
            </div>
        </section>
    )
}