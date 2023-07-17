import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.module.scss';
import './Slider.css';

function SliderComponent({ arrImg }) {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoSpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {arrImg.map((image, index) => (
                <img src={image} key={index} alt="slider" />
            ))}
        </Slider>
    );
}

export default SliderComponent;
