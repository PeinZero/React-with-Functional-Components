import {configureStore} from '@reduxjs/toolkit';

import counterReducer from './counter';
import authenticationrReducer from './authentication';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        authentication: authenticationrReducer
    }
});

export default store;