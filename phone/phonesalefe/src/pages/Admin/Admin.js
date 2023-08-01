import Button from '~/components/Button/Button';
import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import { faTrashCan, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Admin() {
    const [checkAdd, setCheckAdd] = useState(false);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/customer/new')
            .then((res) => res.json())
            .then((res) => {
                setCustomers(res);
            });
    }, []);
    const turnAdd = () => {
        setCheckAdd(true);
    };
    const offAdd = () => {
        setCheckAdd(false);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('header')}>
                    <div className={cx('header_main')}>
                        <p>Quản lý tài khoản</p>
                        <div className={cx('add')}>
                            <Button primary fullwidth onClick={() => turnAdd()}>
                                Thêm mới tài khoản
                            </Button>
                        </div>
                    </div>
                    {checkAdd ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')}>
                                    <p>Tên đăng nhập</p>
                                    <input type="text" placeholder="Username"></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Mật khẩu</p>
                                    <input type="password" placeholder="Password"></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Số điện thoại</p>
                                    <input type="text" placeholder="Numberphone"></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Địa chỉ</p>
                                    <input type="text" placeholder="Address"></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Role</p>
                                    <input type="text" placeholder="Role"></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth>
                                        Tạo tài khoản
                                    </Button>
                                </div>
                                <div className={cx('accept2')}>
                                    <Button normal large onClick={() => offAdd()}>
                                        Đóng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className={cx('container')}>
                    <div className={cx('container_main')}>
                        {customers.map((customer) => {
                            return (
                                <div className={cx('account_item')} key={customer.id}>
                                    <div className={cx('name', 'account')}>
                                        <p>{customer.name}</p>
                                    </div>
                                    <div className={cx('password', 'account')}>
                                        <p>{customer.password}</p>
                                    </div>
                                    <div className={cx('role', 'account')}>
                                        <p>Role: {customer.role}</p>
                                    </div>
                                    <div className={cx('edit')}>
                                        <FontAwesomeIcon icon={faUserPen} />
                                        <p>Edit</p>
                                    </div>
                                    <div className={cx('edit')}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                        <p>Delete</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Admin;
