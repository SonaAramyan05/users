import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
type loginState = {
    isLoggedIn: boolean;
    error: string | null;
    userName: string | null;
};
const initialState: loginState = {
    isLoggedIn: false,
    error: null,
    userName: null,
};
export const loginUser = createAsyncThunk(
    "login/loginUser",
    async (
        { username, password }: { username: string; password: string },
        { rejectWithValue }
    ) => {
        try {
            const response = await fetch("http://localhost:8000/admins");
            const admins = await response.json();
            const validAdmin = admins.find(
                (admin: { username: string; password: string }) =>
                    admin.username === username && admin.password === password
            );
            if (validAdmin) {
                return validAdmin;
            } else {
                return rejectWithValue("Invalid username or password");
            }
        } catch (error) {
            return rejectWithValue("Error !!!");
        }
    }
);

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.userName = action.payload;
            state.error = null;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload as string;
                console.log("2222", action.payload);
            } else {
                state.error = "Error occurred while logging in";
            }
            state.isLoggedIn = false;
        });
    },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
