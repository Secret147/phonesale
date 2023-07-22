import styles from './Home.module.scss';
import classNames from 'classnames/bind';
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
import Taskbar from '~/components/Taskbar/Taskbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function Home() {
    // const productsAPI = 'http://localhost:8080/product/new';
    const [products, setProducts] = useState([]);
    // const [productpage, setProductpage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [check, setCheck] = useState(true);
    // useEffect(() => {
    //     fetch(productsAPI)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setProducts(res);
    //         });
    // }, []);
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

    return (
        <div className={cx('wrapper')}>
            <Taskbar
                setProducts={setProducts}
                onClick={() => {
                    setCheck(false);
                }}
            ></Taskbar>
            <div className={cx('slider')}>
                <SliderComponent arrImg={[img1, img2, img3, img5, img6, img7, img8]} />
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
