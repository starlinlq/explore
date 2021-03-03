import { combineReducers } from "redux";
import { user } from "./user/reducers";
import { data } from "./data/reducers";
import { createStore } from "redux";

const rootReducer = combineReducers({ user: user, data: data });
export const store = createStore(rootReducer);
