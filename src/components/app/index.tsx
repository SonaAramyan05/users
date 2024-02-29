import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "../admin";
import Movies from "../movies";
import Header from "../Header";
import MovieDetails from "../movieDetails";
import { useSelector } from "react-redux";
import { allMoviesSelector } from "../../store/movie/moviesSelector";

const App: React.FC = () => {
    const allMovies = useSelector(allMoviesSelector);
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/movies" element={<Movies />} />
                {allMovies.map((movie) => (
                    <Route
                        key={movie.id}
                        path={`/movies/${movie.id}`}
                        element={<MovieDetails movie={movie} />}
                    />
                ))}{" "}
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
