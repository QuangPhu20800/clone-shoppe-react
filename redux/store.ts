// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import counterReducer from "./reducer";

// const store = createStore(counterReducer, applyMiddleware(thunk))

// export default store

import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../redux/silce';

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
});
