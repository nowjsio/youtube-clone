import React from 'react';
import VideoItem from '../video-item/video-item';

const VideoList = props => {
  const { videos } = props;
  return (
    <ul>
      {videos.map(video => {
        return <VideoItem key={video.channelId} title={video.title} />;
      })}
    </ul>
  );
};

export default VideoList;
