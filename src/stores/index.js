import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { user } from "./user/reducers";
import { data } from "./data/reducers";
import { createStore } from "redux";

const rootReducer = combineReducers({ user: user, data: data });
export const store = createStore(rootReducer, applyMiddleware(thunk));
