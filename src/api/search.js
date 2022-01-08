import config from '../config/config';

const searchUrl = 'https://youtube.googleapis.com/youtube/v3/search?';
const popularUrl = 'https://youtube.googleapis.com/youtube/v3/videos?';
const defaultOptions = {
  part: 'snippet',
  maxResult: 6,
  key: config.youtubeApiKey,
};

// eslint-disable-next-line import/prefer-default-export
export const searchPopular = async (
  part = defaultOptions.part,
  maxResult = defaultOptions.maxResult,
) => {
  const url = `${popularUrl}part=${part}&maxResults=${maxResult}&key=${defaultOptions.key}&chart=mostPopular`;
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  try {
    const data = await fetch(url, requestOptions);
    const json = await data.json();
    return json;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export const searchVideos = async (
  query,
  part = defaultOptions.part,
  maxResult = defaultOptions.maxResult,
) => {
  let url;
  if (query === undefined || query === null) {
    url = `${searchUrl}part=${part}&maxResults=${maxResult}&key=${defaultOptions.key}`;
  } else {
    url = `${searchUrl}part=${part}&maxResults=${maxResult}&key=${defaultOptions.key}&q=${query}`;
  }
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  try {
    const data = await fetch(url, requestOptions);
    const json = await data.json();
    return json;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};
