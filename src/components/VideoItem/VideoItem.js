import React from 'react';
import ReactPlayer from 'react-player';

function VideoItem({ className, width, height, url, playing,muted, ...props }) {
    return <ReactPlayer className={className} width={width} height={height} url={url} playing={playing} muted={muted} {...props} />;
}

export default VideoItem;
