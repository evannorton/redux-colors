import { createStore, applyMiddleware } from "redux";
import { compose } from "redux";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeEnhancers()
    );

    return store;
}