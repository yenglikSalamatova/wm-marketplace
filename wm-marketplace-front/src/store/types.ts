import {
  Action,
  CaseReducer,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import store from "store";

export type T_RootState = ReturnType<typeof store.getState>;
export type T_AppThunk<T_ReturnType = void> = ThunkAction<
  T_ReturnType,
  T_RootState,
  undefined,
  Action<string>
>;
export type T_Dispatch = typeof store.dispatch;
export type T_Reducer<T, K> = CaseReducer<T, PayloadAction<K>>;
