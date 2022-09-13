import config from '~/config';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import Discover from './Discover/Discover';
import CopyRight from './CopyRight';
import { Scrollbars } from 'react-custom-scrollbars-2';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <Scrollbars
            autoHide
            hideTracksWhenNotNeeded
            className={cx('scrollbar')}
            style={{ width: 342, height: 760, marginLeft: -4, position: 'fixed' }}
        >
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        tittle="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        tittle="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        tittle="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>
                <SuggestedAccounts label="Suggested accounts" />
                <SuggestedAccounts label="Following accounts" />
                <Discover label={'Discover'} />
                <CopyRight />
            </aside>
        </Scrollbars>
    );
}

export default Sidebar;
