import "../App.css"
import Navbar from "./Navbar.jsx"
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    function scrollToBottom() {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }

    return (
        <div className="image">
            <div className="flex justify-center">
                <Navbar/>
                <div className="">
                    <h1 className="text-3xl font-['Alkatra'] text-center relative top-64 text-orange-200 text">Refresque-se com nossos deliciosos <b className="text-orange-300">Sacolés!</b></h1>
                    <button onclick={scrollToBottom()} className="relative top-80 left-28 bg-orange-300 p-5 rounded-lg animate-bounce ring-offset-2 ring">Desce a página</button>
                </div>
            </div>

        </div>
    )
}