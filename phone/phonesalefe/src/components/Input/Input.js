import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);
function Input({ type, name, value, className, title, small, onChange, large, placeholder, ...passProps }) {
    const props = {
        ...passProps,
    };
    const classes = cx('wrapper', {
        [className]: className,
        small,
        large,
    });

    return (
        <div className={classes} {...props}>
            <input
                type={type}
                placeholder={placeholder}
                className={cx('input')}
                onChange={onChange}
                name={name}
                value={value}
                required
            />
        </div>
    );
}
export default Input;
