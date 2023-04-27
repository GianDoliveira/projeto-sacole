import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Flavors() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
};

    return (
        <section className="relative top-8 pb-6 overflow-hidden">
            <h1 className="text-3xl mx-5">Sabores Comuns</h1>
            <Slider {...settings} >
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://1.bp.blogspot.com/-mQXKFyr5aqw/WlZfxGd0JdI/AAAAAAAAZU4/k5HwEwX8id8-EPyU8vjlYWVMNS7wg9LEQCK4BGAYYCw/s1600/sacole%2Bde%2Bcoco.jpg' alt='sacolé de coco'></img>
                    <div>
                        <p className='text-2xl mb-3'>Sacolé de coco</p>
                    </div>
                </div>
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://assets.delirec.com/images%2FCs3OXqlkaAQDZSMijjWgCUQCSBl1%2Frecipe%2F0d97daf6-64b6-482f-872c-9bfb18f48c76-Geladinho-de-mousse-de-maracuj%C3%A1--thumb-0' alt='sacolé de maracujá'></img>
                    <div>
                        <p className='text-2xl mb-3'>Sacolé de maracujá</p>
                    </div>
                </div>
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://www.receitasagora.com.br/wp-content/uploads/2020/04/receita-sacole-de-abacate.jpg' alt='sacolé de abacate'></img>
                    <div>
                        <p className='text-2xl mb-3'>Sacolé de abacate</p>
                    </div>
                </div>
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://fyoti.com.br/wp-content/uploads/2019/11/Receita-de-Sacol%C3%A9-de-Morango-com-Kefir-de-Leite-Low-Carb.jpg' alt='sacolé de morango'></img>
                    <div>
                        <p className='text-2xl mb-3'>Sacolé de morango</p>
                    </div>
                </div>
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://www.confeiteiradesucesso.com/wp-content/uploads/2021/12/geladinhochocolate.jpg' alt='sacolé de chocolate'></img>
                    <div>
                        <p className='text-2xl mb-3'>Sacolé de chocolate</p>
                    </div>
                </div>
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://assets.delirec.com/images%2F3OIN6bY0rLXNR6ANZA0MTjcAt3f1%2Frecipe%2F53c0bc8e-8bb4-46ee-af80-c70421f450d5-Geladinho-de-amendoim--gallery-0' alt='sacolé de amendoim'></img>
                    <div>
                        <p className='text-2xl mb-3'>Sacolé de amendoim</p>
                    </div>
                </div>
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://assets.delirec.com/images%2F3OIN6bY0rLXNR6ANZA0MTjcAt3f1%2Frecipe%2F3a051eed-3603-4ba2-bb14-5163f7c50f50-Geladinho-de-goiaba--0' alt='sacolé de goiaba'></img>
                    <div>
                        <p className='text-2xl mb-3'>Sacolé de goiaba</p>
                    </div>
                </div>
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://i0.wp.com/saudevidatotal.com/wp-content/uploads/2019/09/Sacol%C3%A9-de-Manga.jpg?fit=720%2C480&ssl=1' alt='sacolé de manga'></img>
                    <div>
                        <p className='text-2xl mb-3'>Sacolé de manga</p>
                    </div>
                </div>


            </Slider>
            <h1 className="text-3xl mx-5 mt-12">Sabores Gourmet</h1>
            <Slider {...settings} className='mb-16'>
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://comidinhasdochef.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/10/Geladinho-de-Leite-Ninho-com-Morango.jpg.webp' alt='Leite Ninho com Morango'></img>
                    <div>
                        <p className='text-2xl mb-3'>Leite Ninho com Morango</p>
                    </div>
                </div>
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://comidinhasdochef.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/03/Geladinho-de-Pa%C3%A7oca.jpg.webp' alt='sacolé de Paçoca'></img>
                    <div>
                        <p className='text-2xl mb-3'>Paçoca</p>
                    </div>
                </div>
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://comidinhasdochef.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/02/Geladinho-de-Oreo.jpg.webp' alt='sacolé de Oreo'></img>
                    <div>
                        <p className='text-2xl mb-3'>Oreo</p>
                    </div>
                </div>
                <div className="flex justify-center text-center bg-yellow-100 rounded-lg">
                    <img className="w-96 h-72 p-5 relative min-[500px]:left-28" src='https://comidinhasdochef.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/09/Geladinho-de-Nutella-com-Leite-Ninho-CHUP-CHUP-SACOL%C3%89-DINDIN-JUJU.jpg.webp' alt='Leite Ninho com Nutella'></img>
                    <div>
                        <p className='text-2xl mb-3'>Leite Ninho com Nutella</p>
                    </div>
                </div>

            </Slider>
        </section>
    )
}