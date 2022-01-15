import React, { useEffect, useRef, useState } from 'react';
import SearchHeaer from './components/search-header/search-header';
import VideoList from './components/video-list/video-list';
import VideoDetail from './components/video-detail/vedeo-detail';
import styles from './app.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const inputRef = useRef();
  const handleSearch = async event => {
    event.preventDefault();
    const searchedName = inputRef.current.value;
    const searchJson = await youtube.search(searchedName);
    setVideos(searchJson.items);
    setSelectedVideo(null);
  };
  const handleSelect = async video => {
    setSelectedVideo(video);
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
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            handleSelect={handleSelect}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
