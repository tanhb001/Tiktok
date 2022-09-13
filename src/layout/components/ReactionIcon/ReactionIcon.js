import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Fragment } from 'react';
import styles from './ReactionIcon.module.scss';

const cx = classNames.bind(styles);

function ReactionIcon({ icon, like, comment, share }) {
    return (
        <Fragment>
            <div className={cx('wrapper')}>
                <FontAwesomeIcon icon={icon} className={cx('icon')} />
            </div>
            <span className={cx('number')}>{like}</span>
            <span className={cx('number')}>{comment}</span>
            <span className={cx('number')}>{share}</span>
        </Fragment>
    );
}

export default ReactionIcon;
