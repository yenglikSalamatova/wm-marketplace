import { combineReducers } from "@reduxjs/toolkit";

import appReducer from "@/features/App/reducer";
import userDataReducer from "@/features/UserData/reducer";

export default combineReducers({
  app: appReducer,
  userData: userDataReducer,
});
