import React, { useEffect, useRef, useState } from 'react';
import { searchPopular, searchVideos } from './api/search';
import Navbar from './components/navbar';
import VideoList from './components/video-list/video-list';

const App = () => {
  const [videos, setVideos] = useState([]);
  const inputRef = useRef();
  const formRef = useRef();
  const handleSearch = async event => {
    event.preventDefault();
    const searchedName = inputRef.current.value;
    const searchJson = await searchVideos(searchedName);
    setVideos(searchJson.items.map(item => item.snippet));
    formRef.current.reset();
  };
  useEffect(async () => {
    try {
      const popularJson = await searchPopular();
      setVideos(popularJson.items.map(item => item.snippet));
    } catch (e) {
      console.error('[!]ERROR: ', e);
    }
  }, []);
  return (
    <>
      <Navbar
        inputRef={inputRef}
        formRef={formRef}
        handleSearch={handleSearch}
      />
      <VideoList videos={videos} />
    </>
  );
};

export default App;
