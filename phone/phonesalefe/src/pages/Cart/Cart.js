import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import CartItem from '~/components/CartItem/CartItem';

const cx = classNames.bind(styles);
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function Cart() {
    const [products, setProducts] = useState([]);
    const [totalpay, setTotalpay] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:8080/product/${Cookies.get('user')}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
                const totalPrice = res.reduce((accumulator, product) => {
                    return accumulator + product.price;
                }, 0);
                setTotalpay(totalPrice);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                {products.map((product) => {
                    return (
                        <CartItem
                            key={product.id}
                            name={product.name}
                            img={product.img}
                            price={formatNumber(product.price)}
                            memory={product.memory}
                        ></CartItem>
                    );
                })}
            </div>
            <div className={cx('pay')}>
                <div className={cx('pay_main')}>
                    <p>Tổng tiền tạm tính:</p>
                    <span> {formatNumber(totalpay)}</span>
                </div>
                <div className={cx('paid')}>
                    <p>Tiến hành đặt hàng</p>
                </div>
            </div>
        </div>
    );
}
export default Cart;
