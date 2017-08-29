import { combineReducers } from 'redux';
import locationReducer from './location';
import authReducer from './auth';
import connectionReducer from './connection';

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        location: locationReducer,
        auth: authReducer,
        connection: connectionReducer,
        ...asyncReducers
    });
};

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
