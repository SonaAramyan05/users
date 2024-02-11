import { createSelector } from "@reduxjs/toolkit";
import { rootState } from "..";

export const homeSelector = (state: rootState) => state.home;
export const usersSelector = createSelector(homeSelector, (home) => home.users);
