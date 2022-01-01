import React from 'react';
import styles from './video-item.module.css';

const VideoItem = props => {
  // const { title } = props.video.snippet.title;
  const {
    video: {
      snippet: { thumbnails, title, channelTitle },
    },
  } = props;

  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={thumbnails.medium.url}
          alt="thumbnails url"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channel}>{channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
