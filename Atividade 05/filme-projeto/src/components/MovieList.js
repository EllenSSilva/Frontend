import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/api';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getPopularMovies();
            setMovies(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Filmes Populares</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
