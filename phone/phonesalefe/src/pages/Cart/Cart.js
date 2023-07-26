import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '~/components/CartItem/CartItem';

const cx = classNames.bind(styles);
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function Cart() {
    const [products, setProducts] = useState([]);
    const [totalpay, setTotalpay] = useState(0);
    const [checkItem, setCheckitem] = useState(false);

    const getProduct = () => {
        fetch(`http://localhost:8080/product2/${Cookies.get('user')}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    };
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
    }, [checkItem]);
    useEffect(() => {
        if (products.length > 0) {
            setCheckitem(true);
        } else {
            setCheckitem(false);
        }
    }, [products]);

    return (
        <>
            {checkItem ? (
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
                            <Link to={'/formorder'}>
                                <p>Tiến hành đặt hàng</p>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('null_product')}>
                    <div className={cx('null_main')}>
                        <img src="https://hoanghamobile.com/Content/web/content-icon/no-item.png" alt="no_item"></img>
                        <p>Hiện chưa có sản phẩm trong giỏ hàng</p>
                    </div>
                </div>
            )}
        </>
    );
}
export default Cart;
