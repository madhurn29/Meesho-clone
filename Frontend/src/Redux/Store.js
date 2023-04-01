import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as Productreducer } from "../Redux/ProductRedux/reducer";
import { reducer as AuthReducer } from "./AuthRedux/reducer";
//TODO: import reducer here and add it inside combineReducers
const rootReducer = combineReducers({ Productreducer, AuthReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
