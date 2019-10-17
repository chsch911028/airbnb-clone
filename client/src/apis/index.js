import axios from 'axios';

//http://localhost:3000/api
//http://49.236.137.229/api

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const getRooms = async () => {
  const response = api.get('/rooms');
  return response;
};
