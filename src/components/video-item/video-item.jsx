import React from 'react';

const VideoItem = props => {
  // const { title } = props.video.snippet.title;
  const {
    video: {
      snippet: { thumbnails, title, channelTitle },
    },
  } = props;

  return (
    <li>
      <img src={thumbnails.medium.url} alt="thumbnails url" />
      <p>{title}</p>
      <p>{channelTitle}</p>
    </li>
  );
};

export default VideoItem;
