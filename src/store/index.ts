import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "./movie/moviesSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        movies: moviesReducers,
    },
});
export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
