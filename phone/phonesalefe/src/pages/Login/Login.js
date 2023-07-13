import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Input from '~/components/Input/Input';
import Form from '~/components/Form/Form';
import Button from '~/components/Button/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Login() {
    const loginAPI = 'http://localhost:8080/customer';
    const [customer, setCustomer] = useState({
        name: '',
        password: '',
        role: 0,
    });
    const inputChange = (event) => {
        const { name, value } = event.target;
        setCustomer({ ...customer, [name]: value });
    };
    const handleSubmit = async (event) => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(customer),
        };
        const response = await fetch(loginAPI, fetchOptions);
        if (response.ok) {
            window.location.href = '/';
        } else {
            alert('Tài khoản hoặc mật khẩu không đúng');
        }
    };
    return (
        <Form title="Login" onSubmit={handleSubmit}>
            <Input type="email" placeholder="Username" onChange={inputChange} name="name" value={customer.name} />
            <Input
                type="password"
                placeholder="Password"
                onChange={inputChange}
                name="password"
                value={customer.password}
            />
            <div className={cx('btn_submit')}>
                <Button primary type="submit">
                    Login
                </Button>
                <br></br>
                <div className={cx('question')}>
                    <span>Bạn chưa có tài khoản?</span>
                    <a href="/register">Đăng kí</a>
                </div>
            </div>
        </Form>
    );
}
export default Login;
