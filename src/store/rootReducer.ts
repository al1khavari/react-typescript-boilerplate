import { combineReducers } from '@reduxjs/toolkit';
import sample from './sample/sampleSlice';

const rootReducer = combineReducers({ sample });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
