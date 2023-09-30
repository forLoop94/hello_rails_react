import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './store/reducers/messageReducer';

const store = configureStore({
    reducer: {
        message: messageReducer,
      },
})

export default store;