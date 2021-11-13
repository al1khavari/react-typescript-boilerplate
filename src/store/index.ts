/* eslint-disable global-require */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
   reducer: rootReducer,
   devTools: process.env.NODE_ENV === 'development',
   middleware: getDefaultMiddleware({
      // immutableCheck: false,
   }),
});

if (module.hot) {
   module.hot.accept('./rootReducer', () => {
      const newRootReducer = require('./rootReducer').default;
      store.replaceReducer(newRootReducer);
   });
}

export type AppDispatch = typeof store.dispatch;
export default store;

(window as any).getState = () => store.getState();
