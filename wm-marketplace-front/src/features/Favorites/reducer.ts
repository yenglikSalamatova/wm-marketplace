import { createAction, createReducer } from "@reduxjs/toolkit";
import { T_Favorites } from "./types";
import { T_AppThunk, T_Dispatch } from "@/store/types";

const initialState: T_Favorites = [];

const addFavorite = createAction<number>("FAVORITES/add");
const removeFavorite = createAction<number>("FAVORITES/remove");

const favoritesReducer = createReducer(initialState, (builder) => {
  builder.addCase(addFavorite, (state, action) => {
    return [...state, action.payload];
  });
  builder.addCase(removeFavorite, (state, action) => {
    return state.filter((id) => id !== action.payload);
  });
});

export const setFavorite =
  (id: number): T_AppThunk =>
  (dispatch: T_Dispatch) => {
    dispatch(addFavorite(id));
  };

export const unsetFavorite =
  (id: number): T_AppThunk =>
  (dispatch: T_Dispatch) => {
    dispatch(removeFavorite(id));
  };

export default favoritesReducer;
