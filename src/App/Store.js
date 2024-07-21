// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AllReducer from '../ReduxToolKit/AllSlice';


const persistConfig = {
  key: 'Flipkart',
  storage,
};


const rootReducer = combineReducers({
  AllStore: AllReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
