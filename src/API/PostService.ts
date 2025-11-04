import axios from 'axios';

export class PostService {
  static async getAll(limit: number, page: number) {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      },
    });
  }
}
