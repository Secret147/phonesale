import Slider from 'react-slick';
import './SliderComponent.module.css';

function SliderComponent({ arrImg }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {arrImg.map((image, index) => {
                return <img key={index} src={image} alt="slider" preview="false" width="100%" height="100px" />;
            })}
        </Slider>
    );
}
export default SliderComponent;
