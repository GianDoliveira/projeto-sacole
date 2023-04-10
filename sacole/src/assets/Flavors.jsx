import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Flavors() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section>
            <Slider {...settings}>
                <div>
                    <img src='' alt=''></img>
                </div>
            </Slider>
        </section>
    )
}