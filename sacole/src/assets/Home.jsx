import "../App.css"
import Navbar from "./Navbar.jsx"

export default function Home() {
    function scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
    return (
            <section className="flex justify-center">
                <Navbar />
                <div className="">
                    <h1 className="text-3xl font-['Alkatra'] text-center relative top-64 text-orange-200 text">Refresque-se com nossos deliciosos <b className="text-orange-300">Sacolés!</b></h1>
                    <button onclick={scrollToBottom()} className="relative top-80 left-28 bg-orange-300 p-5 rounded-lg animate-bounce ring-offset-2 ring">Desce a página
                    </button>
                </div>
            </section>
        
    )
}