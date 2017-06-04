import axios from 'axios';
import setupMocks from './mocks';

axios.defaults.baseURL = 'http://localhost:9000/api/';
if (process.env.NODE_ENV === 'test') {
  setupMocks(axios);
}
const helpers = {
  get: axios.get,
  post: axios.post
};

export default helpers;
