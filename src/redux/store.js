import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { globalReducer } from './global/slice';
import { campersReducer } from './campers/slice';

const camperPeristConfig = {
    key: 'camper',
    storage,
    whitelist: ['camper'],
};

export const store = configureStore({
    reducer: {
        // global: globalReducer,
        campers: persistReducer(camperPeristConfig, campersReducer),
        //   filter: filtersReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
