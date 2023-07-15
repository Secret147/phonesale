import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { faClock, faHeadphones, faLaptop, faMobile, faTablet, faTv } from '@fortawesome/free-solid-svg-icons';
import Task from '~/components/Tasks/Task';

import img1 from '~/img/1200x375_638249291555699153.jpg';
import img2 from '~/img/realme-c55-02.jpg';
import img3 from '~/img/tai-nghe-sennheiser-01.jpg';
import img5 from '~/img/tv-01.jpg';
import img6 from '~/img/watch-gt-3-web.png';
import img7 from '~/img/web-jbl.png';
import img8 from '~/img/webtuan-le-laptop-01.jpg';
import SliderComponent from '~/components/SliderComponent/SliderComponent';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('task')}>
                <Task icon={faMobile} name="Điện thoại" />
                <Task icon={faClock} name="Đồng hồ" />
                <Task icon={faLaptop} name="Laptop" />
                <Task icon={faTv} name="Smart TV" />
                <Task icon={faTablet} name="Tablet" />
                <Task icon={faHeadphones} name="Phụ kiện" />
            </div>
            <div className={cx('sidebar')}>
                <SliderComponent arrImg={[img1, img2, img3, img5, img6, img7, img8]} />
            </div>
        </div>
    );
}
export default Home;
