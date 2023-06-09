import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/index.js';

const store = configureStore({
    reducer
});

export default store;