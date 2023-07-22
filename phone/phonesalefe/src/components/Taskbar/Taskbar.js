import Task from '~/components/Tasks/Task';
import { faClock, faHeadphones, faLaptop, faMobile, faTablet, faTv } from '@fortawesome/free-solid-svg-icons';
import styles from './Taskbar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Taskbar({ setProducts, onClick }) {
    const fetchProduct = (type) => {
        fetch(`http://localhost:8080/product/${type}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('task')} onClick={onClick}>
                <Task icon={faMobile} name="Điện thoại" onClick={() => fetchProduct('dt')} />
                <Task icon={faClock} name="Đồng hồ" onClick={() => fetchProduct('DH')} />
                <Task icon={faLaptop} name="Laptop" onClick={() => fetchProduct('MT')} />
                <Task icon={faTv} name="Smart TV" onClick={() => fetchProduct('TV')} />
                <Task icon={faTablet} name="Tablet" onClick={() => fetchProduct('TL')} />
                <Task icon={faHeadphones} name="Phụ kiện" onClick={() => fetchProduct('PK')} />
            </div>
        </div>
    );
}
export default Taskbar;
