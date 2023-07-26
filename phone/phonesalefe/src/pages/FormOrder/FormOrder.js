import Button from '~/components/Button/Button';
import styles from './FormOrder.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);
function FormOrder() {
    const [bill, setBill] = useState({
        name: '',
        address: '',
        numberphone: '',
        email: '',
        method: '',
        note: '',
        bill: '',
        totalprice: 0,
    });
    const inputChange = (event) => {
        const { name, value } = event.target;
        setBill({ ...bill, [name]: value });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main_form')}>
                <div className={cx('header')}>
                    <p>Thông tin đặt hàng</p>
                </div>
                <div className={cx('container')}>
                    <div className={cx('container_main')}>
                        <div className={cx('container_item')}>
                            <div className={cx('header_item')}>
                                <p>Thông tin khách hàng</p>
                            </div>
                            <div className={cx('main_item')}>
                                <input type="text" placeholder="Họ và tên" name="name" onChange={inputChange}></input>
                                <input
                                    type="text"
                                    placeholder="Số điện thoại"
                                    name="numberphone"
                                    onChange={inputChange}
                                ></input>
                                <input type="email" placeholder="Email" name="email" onChange={inputChange}></input>
                            </div>
                        </div>
                        <div className={cx('container_item')}>
                            <div className={cx('header_item')}>
                                <p>Chọn phương thức giao hàng</p>
                            </div>
                            <div className={cx('main_item')}>
                                <input
                                    className={cx('check')}
                                    type="radio"
                                    value="Nhận hàng tại nhà"
                                    name="method"
                                    onChange={inputChange}
                                ></input>
                                <span>Nhận hàng tại nhà</span>
                                <input
                                    type="radio"
                                    className={cx('check')}
                                    value="Nhận hàng tại cửa hàng"
                                    name="method"
                                    onChange={inputChange}
                                ></input>
                                <span>Nhận hàng tại cửa hàng</span>
                                <input
                                    type="text"
                                    placeholder="Địa chỉ nhận hàng"
                                    name="address"
                                    onChange={inputChange}
                                ></input>
                            </div>
                        </div>
                        <div className={cx('container_item')}>
                            <div className={cx('header_item')}>
                                <p>Ghi chú</p>
                            </div>
                            <div className={cx('main_item')}>
                                <input type="text" placeholder="Ghi chú" name="note" onChange={inputChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className={cx('checkbox')}>
                        <div className={cx('checkbox_main')}>
                            <input type="checkbox" name="bill" onChange={inputChange} value="Xuất hóa đơn"></input>
                            <span>Yêu cầu xuất hóa đơn công ty (Vui lòng điền email để nhận hoá đơn VAT)</span>
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        <div className={cx('button')}>
                            <Button primary large>
                                Tiến hành đặt hàng
                            </Button>
                            <Button normal large href="/">
                                Chọn thêm sản phẩm khác
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FormOrder;
