import React from 'react';
import VideoItem from '../video-item/video-item';
import styles from './video-list.module.css';

const VideoList = props => {
  const { videos } = props;
  return (
    <ul className={styles.videos}>
      {videos.map(video => {
        console.log(video.id);
        return <VideoItem key={video.id} video={video} />;
      })}
    </ul>
  );
};

export default VideoList;
