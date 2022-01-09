import React, { useEffect, useRef, useState } from 'react';
import SearchHeaer from './components/search-header/search-header';
import VideoList from './components/video-list/video-list';
import styles from './app.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const inputRef = useRef();
  const handleSearch = async event => {
    event.preventDefault();
    const searchedName = inputRef.current.value;
    const searchJson = await youtube.search(searchedName);
    setVideos(searchJson.items);
  };
  useEffect(async () => {
    try {
      const popularJson = await youtube.mostPopular();
      setVideos(popularJson.items);
    } catch (e) {
      console.error('[!]ERROR: ', e);
    }
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeaer inputRef={inputRef} handleSearch={handleSearch} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
