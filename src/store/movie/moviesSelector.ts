import { createSelector } from "@reduxjs/toolkit";
import { rootState } from "..";

export const moviesSelector = (state: rootState) => state.movies;
export const allMoviesSelector = createSelector(
    moviesSelector,
    (movies) => movies.data
);
