import classNames from 'classnames/bind';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);
function Form({ title, children, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <div className={cx('wrapper')}>
                <div className={cx('main')}>
                    <div className={cx('header')}>
                        <h1>{title}</h1>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('form_main')}>{children}</div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default Form;
