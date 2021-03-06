import React, { useCallback, useEffect, useRef, useState } from 'react';
import SearchHeader from './components/search-header/search-header';
import VideoList from './components/video-list/video-list';
import VideoDetail from './components/video-detail/vedeo-detail';
import styles from './app.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const inputRef = useRef();
  const handleSearch = useCallback(
    async event => {
      event.preventDefault();
      const searchedName = inputRef.current.value;
      const searchJson = await youtube.search(searchedName);
      setVideos(searchJson.items);
      setSelectedVideo(null);
    },
    [youtube],
  );
  const handleSelect = useCallback(
    async video => {
      setSelectedVideo(video);
    },
    [youtube],
  );
  useEffect(async () => {
    try {
      const popularJson = await youtube.mostPopular();
      setVideos(popularJson.items);
    } catch (e) {
      console.error('[!]ERROR: ', e);
    }
  }, [youtube]);
  return (
    <div className={styles.app}>
      <SearchHeader inputRef={inputRef} handleSearch={handleSearch} />
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
