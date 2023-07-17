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
import Item from '~/components/Item/Item';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const productsAPI = 'http://localhost:8080/product/new';
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(productsAPI)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    }, []);
    const fetchProduct = (type) => {
        fetch(`http://localhost:8080/product/${type}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('task_main')}>
                <div className={cx('task')}>
                    <Task icon={faMobile} name="Điện thoại" onClick={() => fetchProduct('dt')} />
                    <Task icon={faClock} name="Đồng hồ" onClick={() => fetchProduct('DH')} />
                    <Task icon={faLaptop} name="Laptop" onClick={() => fetchProduct('MT')} />
                    <Task icon={faTv} name="Smart TV" onClick={() => fetchProduct('TV')} />
                    <Task icon={faTablet} name="Tablet" onClick={() => fetchProduct('TL')} />
                    <Task icon={faHeadphones} name="Phụ kiện" onClick={() => fetchProduct('PK')} />
                </div>
            </div>
            <div className={cx('slider')}>
                <SliderComponent arrImg={[img1, img2, img3, img5, img6, img7, img8]} />
            </div>
            <div className={cx('item')}>
                <div className={cx('item_main')}>
                    {products.map((product) => {
                        const priceString = product.price;
                        const formattedNumber = priceString.toLocaleString();
                        return (
                            <Item
                                key={product.id}
                                name={product.name}
                                img={product.img}
                                memory={product.memory}
                                price={formattedNumber}
                            ></Item>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default Home;
