import axios from 'axios';

export default axios.create({
  baseURL: 'https://localhost:9000/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
