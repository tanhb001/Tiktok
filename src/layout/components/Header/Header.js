import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu/';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keybroad and shortcuts',
    },
];


function Header() {
    
    const [currentUser,setCurrentUser] = useState(false)

    
    const login = () => {
        setCurrentUser(true)
    }

    const logout = () => {

        setCurrentUser(false)
    }



    //Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                //Handle change language
                break;
            default:
        }
    };


    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@ran',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            separate: true,
            onClickLogout: () => logout()
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                className={cx('upload-btn')}
                                noBorderRadious
                            >
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn', 'inbox-notice')}>
                                    <InboxIcon width="3.2rem" height="3.2rem" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                leftIcon={<UploadIcon width="20px" height="20px" />}
                                className={cx('upload-btn')}
                                noBorderRadious
                            >
                                Upload
                            </Button>
                            <Button primary onClick={login}>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avater')}
                                src="data:image/jpeg;base64,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"
                                alt="NVA"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
