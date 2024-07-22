// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AllReducer from '../ReduxToolKit/AllSlice';
import adminProductReducer from '../ReduxToolKit/AdminSlice';


const persistConfig = {
  key: 'Flipkart',
  storage,
  blacklist: ['adminProduct'],
};


const rootReducer = combineReducers({
  AllStore: AllReducer,
  adminProduct: adminProductReducer, 
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
