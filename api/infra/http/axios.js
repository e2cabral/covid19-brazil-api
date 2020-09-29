import axios from 'axios';

const instance = axios.create({
  baseURL: `${window.location.origin}/api/report/v1`,
});

export default instance;
