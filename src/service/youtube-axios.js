import axios from 'axios';

export default class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key },
    });
    this.apiDefaultOptions = {
      part: 'snippet',
      maxResults: 6,
      key: this.key,
    };
  }

  async mostPopular(
    part = this.apiDefaultOptions.part,
    maxResults = this.apiDefaultOptions.maxResults,
  ) {
    try {
      const response = await this.youtube.get('videos', {
        params: { part, maxResults, chart: 'mostPopular', type: 'video' },
      });
      return response.data;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  async search(
    query,
    part = this.apiDefaultOptions.part,
    maxResults = this.apiDefaultOptions.maxResults,
  ) {
    let params = {
      part,
      maxResults,
      type: 'video',
    };
    if (query !== undefined && query !== null) {
      params = { ...params, q: query };
    }
    try {
      const response = await this.youtube.get('search', {
        params,
      });
      const ret = {
        ...response.data,
        items: response.data.items.map(item => ({
          ...item,
          id: item.id.videoId,
        })),
      };
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
}
