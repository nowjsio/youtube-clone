import React from 'react';
import VideoItem from '../video-item/video-item';
import styles from './video-list.module.css';

const VideoList = props => {
  const { videos, handleSelect, display } = props;
  return (
    <ul className={styles.videos}>
      {videos.map(video => {
        return (
          <VideoItem
            key={video.id}
            video={video}
            handleSelect={handleSelect}
            display={display}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
