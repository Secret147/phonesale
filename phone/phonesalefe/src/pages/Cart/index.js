import SliderComponent from '~/components/SliderComponent/SliderComponent';
import img1 from '~/img/1200x375_638249291555699153.jpg';
import img2 from '~/img/realme-c55-02.jpg';
import img3 from '~/img/tai-nghe-sennheiser-01.jpg';
import img5 from '~/img/tv-01.jpg';
import img6 from '~/img/watch-gt-3-web.png';
import img7 from '~/img/web-jbl.png';
import img8 from '~/img/webtuan-le-laptop-01.jpg';

function Cart() {
    return (
        <div>
            <SliderComponent arrImg={[img1, img2, img3, img5, img6, img7, img8]} />
        </div>
    );
}
export default Cart;
