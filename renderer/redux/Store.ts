import {createStore, compose, applyMiddleware} from "redux";
import RootReducer from "./RootReducer";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer =
    (process.env.NODE_ENV !== "production" &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export const Store = createStore(RootReducer,
    {},
    composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(RootSaga);