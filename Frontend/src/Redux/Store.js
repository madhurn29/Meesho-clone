import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

//TODO: import reducer here and add it inside combineReducers
const rootReducer = combineReducers({});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
