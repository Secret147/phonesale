import { useEffect, useState } from 'react';
import styles from './OrderItem.module.scss';
import classNames from 'classnames/bind';
import Quantity from '../Quantity/Quantity';

const cx = classNames.bind(styles);
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function OrderItem({ billId }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/billdetail/${billId}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    }, [billId]);
    return (
        <>
            {products.map((product) => {
                return (
                    <div className={cx('product_item')} key={product.id}>
                        <div className={cx('img')}>
                            <img src={product.img} alt="anh"></img>
                        </div>
                        <div className={cx('name')}>
                            <p className={cx('name_product')}>{product.name}</p>
                            <p>{product.memory}</p>
                        </div>
                        <div className={cx('price')}>
                            <p>{formatNumber(product.price)} đ</p>
                        </div>

                        <Quantity billId={billId} productId={product.id} />
                    </div>
                );
            })}
        </>
    );
}
export default OrderItem;
