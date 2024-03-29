import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({});

const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default Store;
