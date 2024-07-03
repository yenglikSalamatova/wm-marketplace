import { Dispatch, createAction, createReducer } from "@reduxjs/toolkit";
import { I_UserData } from "./types";
import { T_AppThunk } from "@/store/types";

const initialState: I_UserData = {
  id: null,
  login: null,
  email: null,
  phone: null,
  nameFirst: null,
  nameLast: null,
  namePatronymic: null,
  displayName: null,
  birthDate: null,
  gender: null,
};

const setUserDataAction = createAction<I_UserData>("USER_DATA/set");

const useDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserDataAction, (state, action) => {
    return { ...state, ...action.payload };
  });
});

export const setUserData =
  (userData: I_UserData): T_AppThunk =>
  (dispatch: Dispatch) => {
    dispatch(setUserDataAction(userData));
  };

export default useDataReducer;
