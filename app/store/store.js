import React from 'react';
import { createStore, combineReducers } from 'redux';
import trackers from './reducers/trackers';

const reducer = combineReducers({
	trackers,
});

export default createStore(reducer);