import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

function DiscoverItem({ icon, title }) {
    return (
        <div className={cx('icon-wrapper')}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

export default DiscoverItem;
