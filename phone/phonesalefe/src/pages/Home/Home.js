import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import SliderComponent from '~/components/SliderComponent/SliderComponent';
import Item from '~/components/Item/Item';
import { useEffect, useState } from 'react';
import Taskbar from '~/components/Taskbar/Taskbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    const [products, setProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [check, setCheck] = useState(true);

    const fetchData = (page, limit) => {
        fetch(`http://localhost:8080/product/pages?page=${page}&limit=${limit}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res.products);
                setTotalPages(res.totalPage);
            });
    };
    const next = (id) => {
        window.location.href = `/detail`;
        localStorage.setItem('productId', id);
    };
    const handleClick = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        fetchData(currentPage, 16);
    }, [currentPage]);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    return (
        <div className={cx('wrapper')}>
            <Taskbar
                setProducts={setProducts}
                onClick={() => {
                    setCheck(false);
                }}
            ></Taskbar>
            <div className={cx('slider')}>
                <SliderComponent
                    arrImg={[
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/11/tv-xiaomi-thang-7-01.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/19/iphone-14-pro-max-01.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/23/1200x375.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/24/untitled-1-01-1.png',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/06/06/tv-01.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/13/c32-banner-1.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/10/tai-nghe-sennheiser-01.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/03/s20-fe-1200x382.png',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/10/web-dat-diem-cao-sale-bao-khung-01.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/14/1200x375.jpg',
                    ]}
                />
            </div>
            <div className={cx('item')}>
                <div className={cx('item_main')}>
                    {products.map((product) => {
                        return (
                            <Item
                                key={product.id}
                                name={product.name}
                                img={product.img}
                                memory={product.memory}
                                price={formatNumber(product.price)}
                                onClick={() => next(product.id)}
                            ></Item>
                        );
                    })}
                </div>
            </div>

            <div className={cx('back')} onClick={() => handleClick()}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
            <div className={cx('page')}>
                <div className={cx('page_main')}>
                    {check ? (
                        Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button key={page} onClick={() => handlePageChange(page)}>
                                {page}
                            </button>
                        ))
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Home;
