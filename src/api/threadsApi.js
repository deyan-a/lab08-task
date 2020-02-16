import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

const getThreads = () => axios.get(`${BASE_URL}/threads`);

export default {
    getThreads
};
