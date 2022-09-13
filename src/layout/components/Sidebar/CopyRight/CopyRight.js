import classNames from 'classnames/bind';
import styles from './CopyRight.module.scss';

const cx = classNames.bind(styles);

function CopyRight() {
    return (
        <div className={cx('wrapper', 'line')}>
            <div className={cx('item')}>
                <a href="">About</a>
                <a href="">TikTok Browse</a>
                <a href="">Newsroom</a>
                <a href="">Contact</a>
                <a href="">Careers</a>
                <a href="">ByteDance</a>
            </div>
            <div className={cx('item')}>
                <a href="">TikTok for Good</a>
                <a href="">Advertise</a>
                <a href="">Developers</a>
                <a href="">Transparency</a>
                <a href="">TikTok Rewards</a>
            </div>
            <div className={cx('item')}>
                <a href="">Help</a>
                <a href="">Safety</a>
                <a href="">Terms</a>
                <a href="">Privacy</a>
                <a href="">Creator Portal</a>
                <a href="">Community Guidelines</a>
            </div>
            <div className={cx('item')}>
                <span>© 2022 TikTok</span>
            </div>
        </div>
    );
}

export default CopyRight;
