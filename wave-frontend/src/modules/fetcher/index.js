import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9000/api/';
const helpers = {
  get: axios.get,
  post: axios.post
};

export default helpers;
