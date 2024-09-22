import axios from 'axios';

const apiKey = 'SUA_API_KEY'; // Substitua com sua chave de API
const baseURL = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL: baseURL,
    params: {
        api_key: apiKey,
        language: 'pt-BR',
    },
});

export const getPopularMovies = async () => {
    const response = await api.get('/movie/popular');
    return response.data.results;
};

export const getMovieDetails = async (id) => {
    const response = await api.get(`/movie/${id}`);
    return response.data;
};

// Adicione mais funções para outros endpoints
