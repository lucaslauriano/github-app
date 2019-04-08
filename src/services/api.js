import axios from 'axios';

const rest = axios.create({
  baseURL: 'https://github-node-api.herokuapp.com/api'
});

export const get = () => rest.get('/users');
export const getDetails = username =>
  rest.get('/users/' + username + '/details');
export const getRepos = username => rest.get('/users/' + username + '/repos');

const api = {
  get,
  getDetails,
  getRepos
};

export default api;
