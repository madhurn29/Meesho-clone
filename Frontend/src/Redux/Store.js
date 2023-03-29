import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer as Productreducer} from '../Redux/ProductRedux/reducer'
//TODO: import reducer here and add it inside combineReducers
const rootReducer = combineReducers({Productreducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
