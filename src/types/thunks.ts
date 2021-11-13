import { Action } from 'redux';
import { RootState } from '@/store/rootReducer';
import { ThunkAction } from '@reduxjs/toolkit';

export type DefaultThunkAction = ThunkAction<void, RootState, undefined, Action>;
