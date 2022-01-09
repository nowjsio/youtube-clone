export default class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    this.apiDefaultOptions = {
      part: 'snippet',
      maxResult: 6,
      key: this.key,
    };
  }

  async mostPopular(
    part = this.apiDefaultOptions.part,
    maxResult = this.apiDefaultOptions.maxResult,
  ) {
    const popularUrl = 'https://youtube.googleapis.com/youtube/v3/videos?';
    const url = `${popularUrl}part=${part}&maxResults=${maxResult}&key=${this.apiDefaultOptions.key}&chart=mostPopular&type=video`;
    try {
      const data = await fetch(url, this.requestOptions);
      const json = await data.json();
      return json;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  async search(
    query,
    part = this.apiDefaultOptions.part,
    maxResult = this.apiDefaultOptions.maxResult,
  ) {
    const searchUrl = 'https://youtube.googleapis.com/youtube/v3/search?';
    let url;
    if (query === undefined || query === null) {
      url = `${searchUrl}part=${part}&maxResults=${maxResult}&key=${this.apiDefaultOptions.key}&type=video`;
    } else {
      url = `${searchUrl}part=${part}&maxResults=${maxResult}&key=${this.apiDefaultOptions.key}&q=${query}&type=video`;
    }
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    try {
      const data = await fetch(url, requestOptions);
      const json = await data.json();
      const retJson = {
        ...json,
        items: json.items.map(item => ({ ...item, id: item.id.videoId })),
      };
      return retJson;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
}
