import { useEffect, useState } from 'react';
import styles from './Order.module.scss';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles);

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function Order() {
    const [checkOrder, setCheckorder] = useState(true);
    const [bills, setBills] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/bill/${Cookies.get('user')}`)
            .then((res) => res.json())
            .then((res) => {
                setBills(res);
            });
    }, []);
    return (
        <>
            {checkOrder ? (
                <div className={cx('wrapper')}>
                    <div className={cx('main')}>
                        {bills.map((bill) => {
                            return (
                                <div className={cx('order_item')}>
                                    <div className={cx('order_item_main')}>
                                        <div className={cx('item_header')}>
                                            <p>Hóa đơn {bill.id} </p>
                                        </div>
                                        <div className={cx('item_container')}>
                                            <div className={cx('container_main')}>
                                                <div className={cx('infor')}>
                                                    <span>Thông tin khách hàng</span>
                                                    <p>Họ và tên:{bill.name} </p>
                                                    <p>Số điện thoại: {bill.numberphone}</p>
                                                    <p>Email: {bill.email}:</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('item_container')}>
                                            <div className={cx('container_main')}>
                                                <div className={cx('infor')}>
                                                    <span>Phương thức nhận hàng</span>
                                                    <p>{bill.method}</p>
                                                    <p>Địa chỉ nhận hàng: {bill.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('item_container')}>
                                            <div className={cx('container_main')}>
                                                <div className={cx('infor')}>
                                                    <span>Ghi chú</span>
                                                    <p>{bill.note}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('item_container')}>
                                            <div className={cx('container_main')}>
                                                <div className={cx('infor')}>
                                                    <span>Danh sách sản phẩm</span>
                                                    <div className={cx('list_product')}>
                                                        <div className={cx('product_item')}>
                                                            <div className={cx('img')}>
                                                                <img
                                                                    src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/01/1111.png"
                                                                    alt="anh"
                                                                ></img>
                                                            </div>
                                                            <div className={cx('name')}>
                                                                <p className={cx('name_product')}>iPhone 14 Pro</p>
                                                                <p>(128GB) - Chính hãng VN/A</p>
                                                            </div>
                                                            <div className={cx('price')}>
                                                                <p>14,555,555 đ</p>
                                                            </div>
                                                            <div className={cx('quantity')}>
                                                                <p>Số lượng: 2</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('item_container')}>
                                            <div className={cx('container_main')}>
                                                <div className={cx('infor')}>
                                                    <span>Tổng thanh toán</span>
                                                    <p className={cx('totalprice')}>
                                                        {formatNumber(bill.totalprice)} đ
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className={cx('null_product')}>
                    <div className={cx('null_main')}>
                        <img src="https://hoanghamobile.com/Content/web/content-icon/no-item.png" alt="no_item"></img>
                        <p>Hiện chưa có hóa đơn nào</p>
                    </div>
                </div>
            )}
        </>
    );
}
export default Order;
