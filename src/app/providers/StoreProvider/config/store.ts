import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState: any) {
    return configureStore({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
