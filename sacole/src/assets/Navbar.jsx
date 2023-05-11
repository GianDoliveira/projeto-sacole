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
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className="fixed top-0 left-0 z-10 justify-center">
            <nav className="flex h-16 bg-yellow-300 justify-between p-2 rounded-lg">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>

            <div className={menu_class}>
                <div className="z-10 relative top-48 text-3xl list-none flex flex-col justify-center items-center font-[Dosis] min-[600px]:text-4xl">
                    <li className="py-4 cursor-pointer">
                        <Link activeClass="active" to="start" spy={true} smooth={true} offset={-50} duration={500} data-text="ToBottom" onClick={updateMenu}>Início
                        </Link>
                    </li>
                    <li className="py-4 cursor-pointer">
                        <Link activeClass="active" to="flavors" spy={true} smooth={true} offset={-50} duration={500} data-text="ToBottom" onClick={updateMenu}>Sabores
                        </Link>
                    </li>
                    <li className="py-4 cursor-pointer">
                        <Link activeClass="active" to="prices" spy={true} smooth={true} offset={-50} duration={500} data-text="ToBottom" onClick={updateMenu}>Preços
                        </Link>
                    </li>
                    <li className="py-4 cursor-pointer">
                        <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-50} duration={500} data-text="ToBottom" onClick={updateMenu}>Contato
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    )
}
