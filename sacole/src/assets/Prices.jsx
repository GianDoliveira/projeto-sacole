import CommonItem from "./CommonItem"
import GourmetItem from "./GourmetItem"

export default function Prices() {
    return (
        <section className="flex justify-center items-center flex-col h-screen relative bottom-5">
            <h2 className="text-3xl font-['Alkatra'] text-center text-[#efefef]">Refresque-se com nossos sacolés a preços acessíveis!</h2>
            <div className="border-orange-400 w-80 h-56 text-center bg-gradient-to-b from-orange-300 to-yellow-300">
                <CommonItem/>
            </div>
            <div className="border-orange-400 w-80 h-56 text-center bg-gradient-to-b from-orange-300 to-yellow-300">
                <GourmetItem/>
            </div>
        </section>
    )
}
