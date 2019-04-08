import axios from 'axios';

const api = axios.create({
  baseURL: 'https://github-node-api.herokuapp.com/api'
});

export default api;
