import client from './client';

// eslint-disable-next-line import/prefer-default-export
export const getRandomPhotos = ({ query, count }) =>
  client.get(`/photos/random/`, { params: { query, count } });
