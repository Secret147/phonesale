import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartItem.module.scss';
import classNames from 'classnames/bind';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CartItem({ img, name, memory, price }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main_item')}>
                <div className={cx('cancel')}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
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
