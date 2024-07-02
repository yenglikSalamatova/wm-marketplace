import { combineReducers } from "@reduxjs/toolkit";

import appReducer from "@/features/App/reducer";

export default combineReducers({
  app: appReducer,
});
