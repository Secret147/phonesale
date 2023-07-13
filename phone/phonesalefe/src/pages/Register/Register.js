import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Input from '~/components/Input/Input';
import Form from '~/components/Form/Form';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const customerAPI = 'http://localhost:8080/customer/new';
    const [user, setUser] = useState({
        name: '',
        password: '',
        number: '',
        address: '',
        birth: '',
        role: 0,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const handleSubmit = async (event) => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        };
        const response = await fetch(customerAPI, fetchOptions);
        if (!response.ok) {
            alert(response);
        } else {
            window.location.href = '/';
        }
    };

    return (
        <Form title="Register" onSubmit={handleSubmit}>
            <Input type="email" placeholder="Username" onChange={handleInputChange} name="name" value={user.name} />
            <Input
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
                name="password"
                value={user.password}
            />
            <Input type="date" onChange={handleInputChange} name="birth" value={user.birth} />
            <Input
                type="text"
                placeholder="Number phone"
                onChange={handleInputChange}
                name="number"
                value={user.number}
            />
            <Input type="text" placeholder="Address" onChange={handleInputChange} name="address" value={user.address} />
            <div className={cx('btn_submit')}>
                <Button primary type="submit">
                    Register
                </Button>
                <br />
                <div className={cx('question')}>
                    <span>Bạn đã có tài khoản?</span>
                    <a href="/login">Đăng nhập</a>
                </div>
            </div>
        </Form>
    );
}

export default Register;
