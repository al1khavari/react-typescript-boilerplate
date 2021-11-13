/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { SampleState } from './types';

const initialState: SampleState = {};

const sampleOptions = createSlice({
   name: 'sampleOptions',
   initialState,
   reducers: {},
});

// export slice actions
// sampleOptions.actions
export default sampleOptions.reducer;
