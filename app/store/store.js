import React from 'react';
import { createStore, combineReducers } from 'redux';
import trackers from './reducers/trackers';
import signup from './reducers/signup';
import verifyNumber from './reducers/verifyNumber';

const reducer = combineReducers({
	trackers,
	signup,
	verifyNumber,
});

export default createStore(reducer);