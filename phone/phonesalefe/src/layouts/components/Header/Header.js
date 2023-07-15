import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Header() {
    const isUser = true;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('logo')}>
                    <Link to={'/'} className={cx('icon_home')}>
                        <img
                            src="https://cdn.nhanlucnganhluat.vn/uploads/images/6841A1DC/logo/2019-03/real-me-logo.png"
                            alt="no img"
                        ></img>
                    </Link>
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
                {isUser ? (
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
                            <div>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div>
                                <label>thanhchung2002@gmail.com</label>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Header;
