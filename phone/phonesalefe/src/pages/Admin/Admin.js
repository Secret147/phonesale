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
    const [checkEdit, setCheckEdit] = useState(false);
    const [newUser, setNewUser] = useState({
        name: '',
        address: '',
        password: '',
        number: '',
        birth: '',
        role: '',
    });
    const [eUser, setEUser] = useState({
        name: '',
        address: '',
        password: '',
        number: '',
        birth: '',
        role: '',
    });
    const getAll = () => {
        fetch('http://localhost:8080/customer/new')
            .then((res) => res.json())
            .then((res) => {
                setCustomers(res);
            });
    };
    useEffect(() => {
        getAll();
    }, []);

    const deleteUser = async (id) => {
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8080/user/${id}`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
        } else {
            alert('Fail');
        }
    };
    const editUser = async () => {
        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(eUser),
        };
        const response = await fetch(`http://localhost:8080/customer/new`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
            setCheckEdit(false);
        } else {
            alert('Fail');
        }
    };
    const turnAdd = () => {
        setCheckAdd(true);
        setCheckEdit(false);
    };
    const offAdd = () => {
        setCheckAdd(false);
        localStorage.removeItem('userid');
    };
    const turnEdit = (userid) => {
        setCheckEdit(true);
        fetch(`http://localhost:8080/user/${userid}`)
            .then((res) => res.json())
            .then((res) => {
                setEUser(res);
            });
    };
    const offEdit = () => {
        setCheckEdit(false);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewUser({ ...newUser, [name]: value });
    };
    const handleEditChange = (event) => {
        const { name, value } = event.target;
        setEUser({ ...eUser, [name]: value });
    };
    const addUser = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        };
        const response = await fetch('http://localhost:8080/customer/new', fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
            setCheckAdd(false);
        } else {
            alert('Tài khoản đã tồn tại');
        }
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
                                <div className={cx('add_item')} onChange={handleChange}>
                                    <p>Tên đăng nhập</p>
                                    <input type="text" placeholder="Username" name="name"></input>
                                </div>
                                <div className={cx('add_item')} onChange={handleChange}>
                                    <p>Mật khẩu</p>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        name="password"
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Ngày sinh</p>
                                    <input
                                        type="date"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        name="birth"
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Số điện thoại</p>
                                    <input
                                        type="text"
                                        placeholder="Numberphone"
                                        onChange={handleChange}
                                        name="number"
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Địa chỉ</p>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        onChange={handleChange}
                                        name="address"
                                    ></input>
                                </div>
                                <div className={cx('add_item')} onChange={handleChange}>
                                    <p>Role</p>
                                    <input type="text" placeholder="Role" name="role"></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => addUser()}>
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
                    {/* -------------------------------------Edit--------------------------------------------------------- */}
                    {checkEdit ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')} onChange={handleEditChange}>
                                    <p>Tên đăng nhập</p>
                                    <input type="text" placeholder="Username" name="name" value={eUser.name}></input>
                                </div>
                                <div className={cx('add_item')} onChange={handleEditChange}>
                                    <p>Mật khẩu</p>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleEditChange}
                                        name="password"
                                        value={eUser.password}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Ngày sinh</p>
                                    <input
                                        type="date"
                                        placeholder="Password"
                                        onChange={handleEditChange}
                                        name="birth"
                                        value={eUser.birth}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Số điện thoại</p>
                                    <input
                                        type="text"
                                        placeholder="Numberphone"
                                        onChange={handleEditChange}
                                        name="number"
                                        value={eUser.number}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Địa chỉ</p>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        onChange={handleEditChange}
                                        name="address"
                                        value={eUser.address}
                                    ></input>
                                </div>
                                <div className={cx('add_item')} onChange={handleEditChange}>
                                    <p>Role</p>
                                    <input type="text" placeholder="Role" name="role" value={eUser.role}></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => editUser(eUser.id)}>
                                        Xác nhận
                                    </Button>
                                </div>
                                <div className={cx('accept2')}>
                                    <Button normal large onClick={() => offEdit()}>
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
                                    <div className={cx('edit')} onClick={() => turnEdit(customer.id)}>
                                        <FontAwesomeIcon icon={faUserPen} />
                                        <p>Edit</p>
                                    </div>
                                    <div className={cx('edit')} onClick={() => deleteUser(customer.id)}>
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
