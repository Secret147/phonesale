import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartItem.module.scss';
import classNames from 'classnames/bind';
import { faCheck, faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function CartItem({ img, name, memory, price, onClick, productId }) {
    const [count, setCount] = useState(0);
    const getProduct = (productId) => {
        fetch(`http://localhost:8080/cart/quantity/${productId}`)
            .then((res) => res.json())
            .then((res) => {
                setCount(res);
            });
    };
    useEffect(() => {
        getProduct(productId);
    }, [productId]);
    const up = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8080/cart/up/${productId}`, fetchOptions);
        if (response) {
            window.location.reload();
            localStorage.setItem('scrollPosition', window.scrollY);
        } else {
            alert('fail');
        }
    };

    useEffect(() => {
        // Khôi phục vị trí cuộn từ LocalStorage sau khi trang được tải lại
        const savedScrollPosition = localStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition));
        }
    }, []);
    const down = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8080/cart/down/${productId}`, fetchOptions);
        if (response) {
            window.location.reload();
            localStorage.setItem('scrollPosition', window.scrollY);
        } else {
            alert('fail');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main_item')}>
                <div className={cx('cancel')} onClick={onClick}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={cx('left_item')}>
                    <div className={cx('main')}>
                        <div className={cx('img')}>
                            <img src={img} alt="anh"></img>
                        </div>
                        <div className={cx('name')}>
                            <span className={cx('label')}>{name}</span>
                            <span className={cx('memory')}>{memory}</span>
                            <div className={cx('price')}>
                                <p>Giá: {price} đ</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('count_main')}>
                        <div>
                            <p className={cx('count_header')}>Số lượng</p>
                        </div>
                        <div className={cx('count')}>
                            <div className={cx('count_left')} onClick={() => down()}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                            <div className={cx('count_center')}>
                                <p>{count}</p>
                            </div>

                            <div className={cx('count_right')} onClick={() => up()}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('right_main')}>
                        <div className={cx('right_item')}>
                            <div className={cx('front')}>
                                <p>KM1</p>
                            </div>
                            <div className={cx('bottom')}>
                                <FontAwesomeIcon icon={faCheck} />
                                <p>Hỗ trợ trả góp 0% qua 26 ngân hàng và công ty tài chính</p>
                            </div>
                        </div>
                        <div className={cx('right_item')}>
                            <div className={cx('front')}>
                                <p>KM2</p>
                            </div>
                            <div className={cx('bottom')}>
                                <FontAwesomeIcon icon={faCheck} />
                                <p>
                                    Giảm thêm tới 1.000.000đ khi tham gia Thu cũ - Lên đời điện thoại Android và tất cả
                                    máy tính bảng
                                </p>
                            </div>
                        </div>
                        <div className={cx('right_item')}>
                            <div className={cx('front')}>
                                <p>KM3</p>
                            </div>
                            <div className={cx('bottom')}>
                                <FontAwesomeIcon icon={faCheck} />
                                <p>
                                    Giảm 1% tối đa 150.000đ khi thanh toán qua VNPAY-QR (Áp dụng cho đơn hàng trên
                                    3.000.000đ).
                                </p>
                            </div>
                        </div>
                        <div className={cx('right_item')}>
                            <div className={cx('front')}>
                                <p>KM4</p>
                            </div>
                            <div className={cx('bottom')}>
                                <FontAwesomeIcon icon={faCheck} />
                                <p>
                                    {' '}
                                    Trả góp qua Homepaylater giảm 10% tối đa 1.000.0000đ (Áp dụng giá trị khoản vay từ 6
                                    triệu)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartItem;
