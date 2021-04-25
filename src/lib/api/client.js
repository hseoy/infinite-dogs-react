import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'https://unsplash-api-hseoy.herokuapp.com';

export default client;
