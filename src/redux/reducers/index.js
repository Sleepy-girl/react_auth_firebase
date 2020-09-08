import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import loaderReducer from "./loaderReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["email", "token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  error: errorReducer,
  loader: loaderReducer,
});

export default rootReducer;
