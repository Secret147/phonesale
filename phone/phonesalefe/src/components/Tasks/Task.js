import styles from './Task.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Task({ icon, name, onClick }) {
    const [highlighted, setHighlighted] = useState(false);
    const handleClick = () => {
        setHighlighted(true); // Thay đổi trạng thái highlighted
        // Gọi hàm onClick nếu được truyền vào từ component cha
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={cx('task_item', { background: highlighted })} onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
            <p>{name}</p>
        </div>
    );
}
export default Task;
