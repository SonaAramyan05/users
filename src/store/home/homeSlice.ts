import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../constants";

type homeState = {
    users: User[] | null;
};

const initialState: homeState = {
    users: [],
};

export const getUsers = createAsyncThunk("home/getusers", async () => {
    const resp = await fetch("http://localhost:8000/users");
    return await resp.json();
});

export const saveUser = createAsyncThunk(
    "home/saveUser",
    async (userData: User) => {
        const resp = await fetch("http://localhost:8000/users", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await resp.json();
    }
);

export const deleteUser = createAsyncThunk(
    "home/deleteUser",
    async (userId: number) => {
        await fetch(`http://localhost:8000/users/${userId}`, {
            method: "DELETE",
        });
    }
);

export const updateUser = createAsyncThunk(
    "home/updateUser",
    async (userData: User) => {
        const resp = await fetch(`http://localhost:8000/users/${userData.id}`, {
            method: "PUT",
            body: JSON.stringify(userData),
        });
        return await resp.json();
    }
);

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(saveUser.fulfilled, (state, action) => {
                state.users?.push(action.payload);
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = (state.users || []).filter(
                    (user) => user.id !== action.payload
                );
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                const index = state.users?.findIndex(
                    (user) => user.id === updatedUser.id
                );
                if (index !== -1 && index !== undefined && state.users) {
                    state.users[index] = updatedUser;
                }
            });
    },
});

export default homeSlice.reducer;
