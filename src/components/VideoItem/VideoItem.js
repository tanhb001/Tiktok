import React from 'react';
import ReactPlayer from 'react-player';

function VideoItem({ className, width, height, url, playing, ...props }) {
    return <ReactPlayer className={className} width={width} height={height} url={url} playing={playing} {...props} />;
}

export default VideoItem;
