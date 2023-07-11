import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Input from '~/components/Input/Input';
import Form from '~/components/Form/Form';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Login() {
    return (
        <Form title="Login">
            <Input type="email" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <div className={cx('btn_submit')}>
                <Button primary>Login</Button>
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
