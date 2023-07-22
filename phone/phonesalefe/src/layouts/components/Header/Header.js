import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles);
function Header() {
    const [checkuser, setCheckuser] = useState(false);

    useEffect(() => {
        if (!Cookies.get('user')) {
            setCheckuser(true);
        }
    }, []);
    const logout = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify('logout'),
        };
        const response = await fetch('http://localhost:8080/customer/logout', fetchOptions);
        if (response.ok) {
            Cookies.remove('user');
            setCheckuser(false);
            window.location.reload();
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('logo')}>
                    <a href="/" className={cx('icon_home')}>
                        <img
                            src="https://cdn.nhanlucnganhluat.vn/uploads/images/6841A1DC/logo/2019-03/real-me-logo.png"
                            alt="no img"
                        ></img>
                    </a>
                </div>
                <div className={cx('search')}>
                    <div className={cx('search_main')}>
                        <div className={cx('input_header')}>
                            <input type="text" placeholder="Search"></input>
                        </div>
                        <div className={cx('search_btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>
                <div className={cx('icon')}>
                    <div className={cx('cart')}>
                        <Link to={'/cart'} className={cx('icon_header')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                        <div className={cx('number')}>
                            <span>2</span>
                        </div>
                    </div>
                    <div className={cx('truck')}>
                        <Link to={'/order'} className={cx('icon_header')}>
                            <FontAwesomeIcon icon={faTruck} />
                        </Link>
                    </div>
                </div>
                {checkuser ? (
                    <div className={cx('btn_header')}>
                        <div className={cx('btn_main')}>
                            <Button normal small href="/login">
                                Login
                            </Button>
                            <Button primary small href="/register">
                                Register
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className={cx('user')}>
                        <div className={cx('user_main')}>
                            <div onClick={() => logout()}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div>
                                <label>{Cookies.get('user')}</label>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Header;
