import { useState } from 'react'
import { Link } from "react-scroll"

export default function Navbar() {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
        <div className="w-full fixed top-0 left-0 z-10">
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>

                <h1 className="text-4xl font-['Alkatra'] left-14 top-2 relative">Sacolé</h1>

            </nav>

            <div className={menu_class}>
                <div className="z-10 relative top-48 text-3xl list-none flex flex-col justify-center items-center font-[Dosis] ">
                    <li className="py-4"><a>Inicio</a></li>
                    <li className="py-4"><a>Sabores</a></li>
                    <li className="py-4"><a>Preços</a></li>
                    <li className="py-4"><a>Contatos</a></li>
                </div>
            </div>
        </div>
    )
}