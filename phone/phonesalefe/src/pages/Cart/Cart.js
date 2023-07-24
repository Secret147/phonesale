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

    const getProduct = (api) => {
        fetch(`http://localhost:8080/product2/${Cookies.get('user')}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    };
    useEffect(() => {
        fetch(`http://localhost:8080/cart/totalprice/${Cookies.get('user')}`)
            .then((res) => res.json())
            .then((res) => {
                setTotalpay(res);
            });
    }, []);

    useEffect(() => {
        if (Cookies.get('user')) {
            getProduct();
        }
    }, []);
    const deleteProduct = async (productId) => {
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const deleteAPI = `http://localhost:8080/cart/product/${productId}`;
        const response = await fetch(deleteAPI, fetchOptions);
        if (response.ok) {
            getProduct();
            window.location.reload();
        } else {
            alert('fail');
        }
    };

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
                            onClick={() => deleteProduct(product.id)}
                            productId={product.id}
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
