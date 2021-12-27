import dotenv from 'dotenv';

dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value === null) {
    throw new Error(`Key [${key}] is undeined`);
  }
  return value;
}

const config = {
  youtubeApiKey: required('REACT_APP_YOUTUBE_API_KEY'),
};

export default config;
