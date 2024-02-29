import React from "react";
import { MovieDTO } from "../../types";
import { Link } from "react-router-dom";

const MovieCard: React.FC<{ movie: MovieDTO }> = ({ movie }) => {
    return (
        <div>
            <Link to={`/movies/${movie.id}`}>
                <img src={movie.imageUrl} alt={movie.title} />
            </Link>{" "}
            <h3>title: {movie.title}</h3>
            <p>year: {movie.year}</p>
            <p>rating: {movie.rating}</p>
        </div>
    );
};

export default MovieCard;
