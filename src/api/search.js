import axios from 'axios';

import config from '../config/config';

const searchUrl = 'https://youtube.googleapis.com/youtube/v3/search?';
const defaultOptions = {
  part: 'snippet',
  maxResult: 25,
  key: config.youtubeApiKey,
};

const search = async (
  query,
  maxResult = defaultOptions.maxResult,
  part = defaultOptions.part,
) => {
  let sanitizedUrl = query;
  if (query === undefined || query === null) {
    sanitizedUrl = '';
  }
  const url = `${searchUrl}part=${part}&maxResult=${maxResult}&q=${sanitizedUrl}&key=${defaultOptions.key}`;
  try {
    const response = await axios.get(url);
    const searchItems = response.data.items;
    return searchItems.map(item => item.id);
  } catch (error) {
    console.error(error);
  }
  return 'test';
};

export default search;
