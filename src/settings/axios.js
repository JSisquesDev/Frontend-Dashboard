import axios from 'axios';

const instance = axios.create({
  // .. where we make our configurations
  // baseURL: process.env.BACKEND_URL + ':' + process.env.BACKEND_PORT,
  baseURL: `http://localhost:3001/cv/${process.env.IDIOM}`,
});

// Where you would set stuff like your 'Authorization' header, etc ...

// Also add/ configure interceptors && all the other cool stuff

export default instance;
