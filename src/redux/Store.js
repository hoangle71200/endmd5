import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import rootReducer from "./reducer/RootReducer";

const middleware = [thunk];
export const store = createStore(rootReducer, {}, applyMiddleware(...middleware))