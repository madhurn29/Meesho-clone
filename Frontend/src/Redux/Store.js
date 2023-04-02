import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";


import { reducer as adminReducer } from "./AdminRedux/reducer";
import { reducer as Productreducer } from "../Redux/ProductRedux/reducer";
import { reducer as AuthReducer } from "./AuthRedux/reducer";

const rootReducer = combineReducers({ Productreducer, AuthReducer,adminReducer });


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
