import React from 'react';
import { createStore, combineReducers } from 'redux';
import trackers from './reducers/trackers';
import signup from './reducers/signup';
import verifyNumber from './reducers/verifyNumber';
import profile from './reducers/profile';

const reducer = combineReducers({
	trackers,
	signup,
	verifyNumber,
	profile,
});

export default createStore(reducer);