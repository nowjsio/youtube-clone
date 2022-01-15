import React, { memo } from 'react';
import styles from './video-item.module.css';

const VideoItem = memo(
  ({
    video,
    video: {
      snippet: { thumbnails, title, channelTitle },
    },
    handleSelect,
    display,
  }) => {
    console.log(`${video.id}: re-render`);
    // const { title } = props.video.snippet.title;
    // eslint-disable-next-line react/destructuring-assignment
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
      <li className={`${styles.container} ${displayType}`}>
        <div
          className={styles.video}
          onClick={() => handleSelect(video)}
          aria-hidden="true"
        >
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
  },
);

export default VideoItem;
