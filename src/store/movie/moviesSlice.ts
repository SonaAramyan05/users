import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieDTO } from "../../types";

export const fetchMovies = createAsyncThunk<MovieDTO[]>(
    "movies/fetchMovies",
    async () => {
        const response = await axios.get<MovieDTO[]>(
            "http://localhost:8000/movies"
        );
        return response.data;
    }
);
interface MoviesState {
    data: MovieDTO[];
}

const initialState: MoviesState = {
    data: [],
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export default moviesSlice.reducer;
