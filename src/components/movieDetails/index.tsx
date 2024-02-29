import React from "react";
import { MovieDTO } from "../../types";

interface MovieDetailsProps {
    movie: MovieDTO;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>Description: {movie.description}</p>
            <div>
                actors:
                {movie.actors.map((actor) => (
                    <p> {actor}</p>
                ))}
            </div>
            <video controls>
                <source src={movie.videoUrl} type="video/mp4" />
            </video>
        </div>
    );
};

export default MovieDetails;
