import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import settingsReducer from './settings/settingsSlice';
import buildHistoryReducer from './buildHistory/buildHistorySlice';

const reducer = combineReducers({
  settings: settingsReducer,
  buildHistory: buildHistoryReducer,
})

const middleware = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    timestamp: false,
  })

  middleware.push(logger);
}

const store = configureStore({
  reducer,
  middleware: [...middleware]
})

export default store;