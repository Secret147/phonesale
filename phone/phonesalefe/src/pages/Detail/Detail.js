import Taskbar from '~/components/Taskbar/Taskbar';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';

import SliderComponent from '~/components/SliderComponent/SliderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCheck, faTruckFast, faUserShield } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Detail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('taskbar')}>
                <Taskbar></Taskbar>
            </div>
            <div className={cx('info_product')}>
                <div className={cx('header')}>
                    <p>Điện thoại di động</p>
                    <p>Redmi Note 12S (8GB/256GB)- </p>
                    <p> Chính hãng</p>
                </div>
                <div className={cx('container')}>
                    <div className={cx('slider')}>
                        <SliderComponent
                            arrImg={[
                                'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/05/11/k7sr-black-front-45-r-optimized-optimized.png',
                                'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/05/11/k7sr-black-front-45-l-optimized-optimized.png',
                                'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/05/11/k7sr-green-back-optimized-optimized.png',
                                'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/05/11/k7sr-green-back-45-l-optimized-optimized.png',
                                'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/05/11/k7sr-green-front-optimized-optimized.png',
                            ]}
                            check={true}
                        ></SliderComponent>
                    </div>
                    <div className={cx('infor')}>
                        <div className={cx('infor_main')}>
                            <div className={cx('price')}>
                                <p className={cx('pricef')}>6190000 đ</p>
                                <p className={cx('prices')}>Giá đã bao gồm VAT</p>
                            </div>
                            <p className={cx('infors')}>Sản phẩm bán giá Hotsale với số lượng có hạn</p>
                            <div className={cx('freeship')}>
                                <FontAwesomeIcon icon={faTruckFast} />
                                <p>Miễn phí vận chuyển toàn quốc</p>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('buynow')}>
                                    <p>Mua ngay</p>
                                    <p>Giao tận nhà(COD)</p>
                                    <p>Hoặc nhận tại cửa hàng</p>
                                </div>
                                <div className={cx('buynow', 'tragop')}>
                                    <p>Trả góp</p>
                                    <p>Công ty Tài chính</p>
                                    <p>Hoặc 0% qua thẻ tín dụng</p>
                                </div>
                                <div className={cx('addcart')}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                    <p>Thêm vào giỏ hàng</p>
                                </div>
                            </div>
                            <div className={cx('guaranty')}>
                                <div className={cx('guaranty_header')}>
                                    <p>ƯU ĐÃI THANH TOÁN</p>
                                </div>
                                <div className={cx('guaranty_main')}>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>Giảm thêm tới 800.000đ khi mở thẻ tín dụng TPBank EVO.</p>
                                    </div>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>
                                            Trả góp qua Homepaylater giảm 10% tối đa 1.000.0000đ (Áp dụng giá trị khoản
                                            vay từ 6 triệu)
                                        </p>
                                    </div>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>Mở thẻ tín dụng VPBank nhận ưu đãi tới 1.250.000đ</p>
                                    </div>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>
                                            Giảm 1% tối đa 300.000đ cho đơn hàng giá trị từ 5.000.000đ trở lên khi thanh
                                            toán qua ZaloPay.
                                        </p>
                                    </div>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>Mở thẻ tín dụng VIB - Ưu đãi 250.000đ/thẻ thành công</p>
                                    </div>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>Hỗ trợ trả góp 0% qua 26 ngân hàng và công ty tài chính.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('guaranty')}>
                                <div className={cx('guaranty_header')}>
                                    <p>ƯU ĐÃI ĐI KÈM</p>
                                </div>
                                <div className={cx('guaranty_main')}>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>
                                            Từ ngày 01/07-31/07: Mua Tai nghe không dây Redmi Buds 4 Lite với giá chỉ
                                            còn: 550.000đ khi mua kèm với các sản phẩm Điện thoại, Tablet Xiaomi .
                                        </p>
                                    </div>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>
                                            Giảm thêm tới 1.000.000đ khi tham gia Thu cũ - Lên đời điện thoại Android và
                                            tất cả máy tính bảng
                                        </p>
                                    </div>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>
                                            Giảm thêm 200.000đ cho tất các sản phẩm màn hình khi mua kèm laptop,
                                            MacBook, máy tính bảng và điện thoại.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('box')}>
                        <div className={cx('guaranty')}>
                            <div className={cx('guaranty_header')}>
                                <p>Thông tin bảo hành</p>
                            </div>
                            <div className={cx('guaranty_main')}>
                                <div className={cx('guaranty_item')}>
                                    <FontAwesomeIcon icon={faUserShield} />
                                    <p>Bảo hành 18 tháng chính hãng.</p>
                                </div>
                                <div className={cx('guaranty_item')}>
                                    <FontAwesomeIcon icon={faUserShield} />
                                    <p>1 đổi 1 trong 30 ngày đầu nếu có lỗi phần cứng do nhà sản xuất</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('description')}>
                    <div className={cx('description_header')}>
                        <p>Mô tả</p>
                    </div>
                    <div className={cx('description_container')}>
                        <p>
                            Redmi Note 12S - Chính hãng tuy chỉ mới được ra mắt trong thời gian gần đây nhưng đã thu hút
                            được rất nhiều sự chú ý. Điện thoại sở hữu đầy đủ tính năng hiện đại và mạnh mẽ, Xiaomi
                            Redmi Note 12S sẽ trở thành một trợ thủ đắc lực cho bạn trong quá trình học tập và làm việc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Detail;
