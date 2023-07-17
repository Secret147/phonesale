import styles from './Task.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function Task({ icon, name, onClick }) {
    return (
        <div className={cx('task_item')} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
            <p>{name}</p>
        </div>
    );
}
export default Task;
