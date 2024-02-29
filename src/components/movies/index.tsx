import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchMovies } from "../../store/movie/moviesSlice";
import MovieCard from "../movieCard";
import { allMoviesSelector } from "../../store/movie/moviesSelector";
import { MovieDTO } from "../../types";
import SortingDropdown from "../sortingDropdown";

const Movies: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const allMovies = useSelector(allMoviesSelector);

    const [sortBy, setSortBy] = useState<keyof MovieDTO>("year");
    const [sortOrder, setSortOrder] = useState<string>("asc");
    const [sortedMovies, setSortedMovies] = useState<MovieDTO[]>([]);
    const [isSortButtonClicked, setIsSortButtonClicked] =
        useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    useEffect(() => {
        sortMovies();
    }, [allMovies, sortBy, sortOrder, isSortButtonClicked]);

    const sortMovies = () => {
        const sorted = [...allMovies].sort((a, b) => {
            const aValue = Number(a[sortBy]);
            const bValue = Number(b[sortBy]);
            if (sortOrder === "asc") {
                return aValue - bValue;
            } else {
                return bValue - aValue;
            }
        });
        setSortedMovies(sorted);
    };

    const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value as keyof MovieDTO);
    };

    const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value);
    };

    const handleSortButtonClick = () => {
        setIsSortButtonClicked(true);
    };

    return (
        <div className="movies-container">
            {isSortButtonClicked && (
                <SortingDropdown
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    onSortByChange={handleSortByChange}
                    onSortOrderChange={handleSortOrderChange}
                />
            )}
            <button onClick={handleSortButtonClick}>Sort</button>

            <h2>Movies</h2>
            <div>
                {sortedMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Movies;
