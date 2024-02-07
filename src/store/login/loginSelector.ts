import { createSelector } from "@reduxjs/toolkit";
import { rootState } from "..";

export const loginSelector = (state: rootState) => state.login;
export const isLoggedInSelector = createSelector(
    loginSelector,
    (login) => login.isLoggedIn
);
