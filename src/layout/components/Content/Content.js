import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import { MuteIcon, MusicIcon, VolumIcon, PauseIcon } from '~/components/Icons';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faFlag, faHeart, faPlay, faShare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import VideoItem from '~/components/VideoItem';
import { Waypoint } from 'react-waypoint';
import ReactionIcon from '../ReactionIcon';

const cx = classNames.bind(styles);

function Content({ name, nickname, videoUrl, avatar }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [muted,setMuted] = useState(true)
    console.log(muted)

    useEffect((
        
    ) => {


    }, [isPlaying])

    const playBtn = () => {
        setIsPlaying((current) => !current);
    };

    const volumBtn = () => {
        setMuted((current) => !current)
    };

    const playOnScroll = () => {
        setIsPlaying(true);
        setMuted(false)
    };

    const PauseOnScroll = () => {
        setIsPlaying(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div>
                <img className={cx('avatar')} src={avatar} alt="" />
            </div>
            <div className={cx('right-content')}>
                <div className={cx('content-items')}>
                    <div className={cx('info')}>
                        <span className={cx('name')}>{name}</span>
                        <span className={cx('nickname')}>{nickname}</span>
                    </div>
                    <div className={cx('hashtag-wrapper')}>
                        <span className={cx('hashtag')}>#faptv</span>
                        <span className={cx('hashtag')}>#comnguoi</span>
                        <span className={cx('hashtag')}>#dongphongtv</span>
                        <span className={cx('hashtag')}>#phimhay</span>
                        <span className={cx('hashtag')}>#phimhaymoingay</span>
                        <span className={cx('hashtag')}>#phimhaymoinhat</span>
                        <span className={cx('hashtag')}>#phimvietnam</span>
                        <span className={cx('hashtag')}>#xuhuong</span>
                        <span className={cx('hashtag')}>#trending</span>
                    </div>
                    <div className={cx('music')}>
                        <MusicIcon />
                        <span>nhạc nền - Phương Movie</span>
                    </div>
                </div>
                <div className={cx('btn-wrapper')}>
                    <Button small outline>
                        Follow
                    </Button>
                </div>
                <Waypoint
                    topOffset={'300px'}
                    bottomOffset={'400px'}
                    onEnter={playOnScroll}
                    onLeave={PauseOnScroll}
                    scrollableAncestor={window}
                >
                    <div className={cx('video-wrapper')}>
                        <div onClick={playBtn}>
                            <VideoItem
                                loop
                                playing={isPlaying}
                                width="290px"
                                height="516px"
                                url={videoUrl}
                                muted={muted}
                            />
                        </div>

                        <div className={cx('play')} onClick={playBtn}>
                            {!isPlaying ? (
                                <div className={cx('play-icon-wrapper')}>
                                    <FontAwesomeIcon icon={faPlay} className={cx('play-icon')} />
                                </div>
                            ) : (
                                <PauseIcon />
                            )}
                        </div>
                        <div className={cx('volum')} onClick={volumBtn}>
                            {muted ? <MuteIcon />: <VolumIcon /> }
                        </div>
                        <div className={cx('report')}>
                            <FontAwesomeIcon icon={faFlag} className={cx('report-icon')} />
                            <span>Report</span>
                        </div>
                    </div>
                </Waypoint>
            </div>
            <div className={cx('video-reaction')}>
                <ReactionIcon icon={faHeart} like="224.2K" />
                <ReactionIcon icon={faCommentDots} comment="4629" />
                <ReactionIcon icon={faShare} share="3234" />
            </div>
        </div>
    );
}

export default Content;
