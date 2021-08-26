import { applyMiddleware, compose, createStore, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

const store: Store = createStore(rootReducer, enhancer);

export default store;
