import { T_AppThunk, T_Dispatch, T_Reducer } from "@/store/types";
import { I_AppStore } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: I_AppStore = {
  isLogged: true,
  isAppLoading: false,
};

export const isLoggedReducer: T_Reducer<I_AppStore, boolean> = (
  state,
  action
) => {
  state.isLogged = action.payload;
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    isLogged: isLoggedReducer,
  },
});

export const { isLogged: setIsLoggedAction } = appSlice.actions;

export const setIsLogged =
  (isLogged: boolean): T_AppThunk =>
  (dispatch: T_Dispatch) => {
    dispatch(setIsLoggedAction(isLogged));
  };

export default appSlice.reducer;
