import classNames from 'classnames/bind';
import DiscoverItem from './DiscoverItem';
import styles from './Discover.module.scss';
import { HashTagIcon, MusicIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Discover({ label }) {
    return (
        <div className={cx('wrapper', 'line')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('discover-wrapper')}>
                <DiscoverItem icon={<HashTagIcon />} title="suthatla" />
                <DiscoverItem icon={<HashTagIcon />} title="mackedoi" />
                <DiscoverItem icon={<HashTagIcon />} title="sansangthaydoi" />
                <DiscoverItem icon={<MusicIcon />} title="Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n" />
                <DiscoverItem
                    icon={<MusicIcon />}
                    title="Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng"
                />
                <DiscoverItem icon={<MusicIcon />} title="Thiên Thần Tình Yêu - RICKY STAR" />
                <DiscoverItem icon={<HashTagIcon />} title="7749hieuung" />
                <DiscoverItem icon={<HashTagIcon />} title="genzlife" />
                <DiscoverItem icon={<MusicIcon />} title="Tình Đã Đầy Một Tim - Huyền Tâm Môn" />
                <DiscoverItem
                    icon={<MusicIcon />}
                    title="Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangphamatla"
                />
            </div>
        </div>
    );
}

export default Discover;
