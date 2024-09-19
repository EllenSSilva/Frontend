import axios from 'axios';

const API_KEY = 'SUA_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = () => {
  return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
};

export const getMovieDetails = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};

export const getPopularSeries = () => {
  return axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
};

export const getSeriesDetails = (id) => {
  return axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
};
