import Button from '~/components/Button/Button';
import styles from './Product.module.scss';
import classNames from 'classnames/bind';

import { faTrashCan, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Product() {
    const [checkAdd, setCheckAdd] = useState(false);
    const [products, setProducts] = useState([]);
    const [checkEdit, setCheckEdit] = useState(false);
    const [newProduct, setnewProduct] = useState({
        name: '',
        memory: '',
        description: '',
        image: '',
        price: '',
        type: '',
    });
    const [eProduct, seteProduct] = useState({
        name: '',
        memory: '',
        description: '',
        image: '',
        price: '',
        type: '',
    });
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const getAll = () => {
        fetch('http://localhost:8080/product/all/new')
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    };
    useEffect(() => {
        getAll();
    }, []);

    const deleteProduct = async (id) => {
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8080/product/${id}`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
        } else {
            alert('Fail');
        }
    };
    const editUser = async () => {
        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(eProduct),
        };
        const response = await fetch(`http://localhost:8080/product/new`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
            setCheckEdit(false);
        } else {
            alert('Fail');
        }
    };
    const turnAdd = () => {
        setCheckAdd(true);
        setCheckEdit(false);
    };
    const offAdd = () => {
        setCheckAdd(false);
        localStorage.removeItem('userid');
    };
    const turnEdit = (productid) => {
        setCheckEdit(true);
        fetch(`http://localhost:8080/productid/${productid}`)
            .then((res) => res.json())
            .then((res) => {
                seteProduct(res);
            });
    };
    const offEdit = () => {
        setCheckEdit(false);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setnewProduct({ ...newProduct, [name]: value });
    };
    const handleEditChange = (event) => {
        const { name, value } = event.target;
        seteProduct({ ...eProduct, [name]: value });
    };
    const addUser = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        };
        const response = await fetch('http://localhost:8080/product/new', fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
            setCheckAdd(false);
        } else {
            alert('Tài khoản đã tồn tại');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('header')}>
                    <div className={cx('header_main')}>
                        <p>Quản lý sản phẩm</p>
                        <div className={cx('add')}>
                            <Button primary fullwidth onClick={() => turnAdd()}>
                                Thêm sản phẩm mới
                            </Button>
                        </div>
                    </div>
                    {checkAdd ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')}>
                                    <p>Tên sản phẩm</p>
                                    <input type="text" placeholder="name" name="name" onChange={handleChange}></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Bộ nhớ</p>
                                    <input
                                        type="text"
                                        placeholder="memory"
                                        onChange={handleChange}
                                        name="memory"
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Mô tả</p>
                                    <input
                                        type="text"
                                        placeholder="description"
                                        onChange={handleChange}
                                        name="description"
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Hình ảnh</p>
                                    <input type="text" placeholder="image" onChange={handleChange} name="img"></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Giá thành</p>
                                    <input type="text" placeholder="price" onChange={handleChange} name="price"></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Loại</p>
                                    <input type="text" placeholder="type" name="type" onChange={handleChange}></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => addUser()}>
                                        Thêm sản phẩm
                                    </Button>
                                </div>
                                <div className={cx('accept2')}>
                                    <Button normal large onClick={() => offAdd()}>
                                        Đóng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    {/* -------------------------------------Edit--------------------------------------------------------- */}
                    {checkEdit ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')}>
                                    <p>Tên sản phẩm</p>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="name"
                                        defaultValue={eProduct.name}
                                        onChange={handleChange}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Bộ nhớ</p>
                                    <input
                                        type="text"
                                        placeholder="memory"
                                        onChange={handleEditChange}
                                        name="memory"
                                        defaultValue={eProduct.memory}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Mô tả</p>
                                    <input
                                        type="text"
                                        placeholder="description"
                                        onChange={handleEditChange}
                                        name="description"
                                        defaultValue={eProduct.description}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Hình ảnh</p>
                                    <input
                                        type="text"
                                        placeholder="image"
                                        onChange={handleEditChange}
                                        name="img"
                                        defaultValue={eProduct.img}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Giá thành</p>
                                    <input
                                        type="text"
                                        placeholder="price"
                                        onChange={handleEditChange}
                                        name="price"
                                        defaultValue={eProduct.price}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Loại</p>
                                    <input
                                        type="text"
                                        placeholder="type"
                                        name="type"
                                        defaultValue={eProduct.type}
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => editUser(eProduct.id)}>
                                        Xác nhận
                                    </Button>
                                </div>
                                <div className={cx('accept2')}>
                                    <Button normal large onClick={() => offEdit()}>
                                        Đóng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                {/* -------------------------------------container-------------------------------------------- */}
                <div className={cx('container')}>
                    <div className={cx('container_main')}>
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
                                    <div className={cx('edit')} onClick={() => turnEdit(product.id)}>
                                        <FontAwesomeIcon icon={faUserPen} />
                                        <p>Edit</p>
                                    </div>
                                    <div className={cx('edit')} onClick={() => deleteProduct(product.id)}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                        <p>Delete</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;
