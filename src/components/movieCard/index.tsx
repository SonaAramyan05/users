import React from "react";
import { MovieDTO } from "../../types";

const MovieCard: React.FC<{ movie: MovieDTO }> = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.country}</p>
            <p>Rating: {movie.rating}</p>
        </div>
    );
};

export default MovieCard;
