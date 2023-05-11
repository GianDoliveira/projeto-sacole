import CommonItem from "./algorithm/CommonItem"
import GourmetItem from "./algorithm/GourmetItem"

export default function Prices() {
    return (
        <section className="flex justify-center items-center flex-col h-screen relative md:h-0 md:top-52">
            <h2 className="text-3xl font-['Alkatra'] text-center text-[#efefef]">Refresque-se com nossos sacolés a preços acessíveis!</h2>
            <div className="md:flex">
                <div className="border-orange-400 w-80 h-64 text-center bg-gradient-to-b from-orange-300 to-yellow-300 md:m-2">
                    <CommonItem />
                </div>
                <div className="border-orange-400 w-80 h-64 text-center bg-gradient-to-b from-orange-300 to-yellow-300 md:m-2">
                    <GourmetItem />
                </div>
            </div>
        </section>
    )
}
