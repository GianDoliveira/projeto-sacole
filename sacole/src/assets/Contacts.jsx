import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs"

export default function Contacts() {
    return (
        <section className="flex justify-center items-center flex-col relative top-8">
            <h1 className="text-4xl relative top-10 ">Contato</h1>
            <div className="relative top-12 md:flex">
                <div className="m-5 text-2xl">
                    <AiOutlineMail />
                    <h2 className="py-1">E-mail</h2>
                    <p className="py-1">Tem alguma dúvida ?</p>
                    <b className="py-1">example@gmail.com</b>
                </div>
                <div className="m-5 text-2xl">
                    <BsFillTelephoneFill />
                    <h2 className="py-1">Telefone</h2>
                    <p className="py-1">Você pode ligar a qualquer hora.</p>
                    <b className="py-1">(21)9999-9999</b>
                </div>
                <div className="m-5 text-2xl">
                    <BsWhatsapp />
                    <h2 className="py-1">Chat</h2>
                    <p className="py-1">Nos contate neste instante!</p>
                    <b className="py-1">(21)88888-8888</b>
                </div>
            </div>
        </section>
    )
}