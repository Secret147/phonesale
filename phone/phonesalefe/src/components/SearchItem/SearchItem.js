import styles from './SearchItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function SearchItem({ product, onClick }) {
    return (
        <div className={cx('wrapper')} onClick={onClick}>
            <div className={cx('main')}>
                <div className={cx('img')}>
                    <img src={product.img} alt="anh"></img>
                </div>
                <div className={cx('right')}>
                    <div className={cx('name')}>
                        <p>{product.name}</p>
                        <p> - {product.memory}</p>
                    </div>
                    <div className={cx('price')}>
                        <p>{product.price} đ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchItem;
