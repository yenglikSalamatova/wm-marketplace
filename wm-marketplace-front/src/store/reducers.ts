import { combineReducers } from "@reduxjs/toolkit";

import appReducer from "@/features/App/reducer";
import userDataReducer from "@/features/UserData/reducer";
import favoritesReducer from "@/features/Favorites/reducer";

export default combineReducers({
  app: appReducer,
  userData: userDataReducer,
  favorites: favoritesReducer,
});
