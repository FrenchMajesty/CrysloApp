import React from 'react';
import { createStore, combineReducers } from 'redux';
import trackers from './reducers/trackers';
import signup from './reducers/signup';

const reducer = combineReducers({
	trackers,
	signup,
});

export default createStore(reducer);