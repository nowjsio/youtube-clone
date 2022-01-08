import React, { useEffect, useRef, useState } from 'react';
import { searchPopular, searchVideos } from './api/search';
import SearchHeaer from './components/search-header/search-header';
import VideoList from './components/video-list/video-list';
import styles from './app.module.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const inputRef = useRef();
  const formRef = useRef();
  const handleSearch = async event => {
    event.preventDefault();
    const searchedName = inputRef.current.value;
    const searchJson = await searchVideos(searchedName);
    setVideos(searchJson.items);
    formRef.current.reset();
  };
  useEffect(async () => {
    try {
      const popularJson = await searchPopular();
      setVideos(popularJson.items);
    } catch (e) {
      console.error('[!]ERROR: ', e);
    }
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeaer
        inputRef={inputRef}
        formRef={formRef}
        handleSearch={handleSearch}
      />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
