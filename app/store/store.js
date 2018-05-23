import React from 'react';
import { createStore, combineReducers } from 'redux';
import trackers from './reducers/trackers';
import signup from './reducers/signup';
import verifyNumber from './reducers/verifyNumber';
import profile from './reducers/profile';
import wecare from './reducers/wecare';
import history from './reducers/history';

const reducer = combineReducers({
	trackers,
	signup,
	verifyNumber,
	profile,
	wecare,
	history,
});

export default createStore(reducer);