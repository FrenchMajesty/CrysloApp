import axios from 'axios';
import { API_URL }  from 'app/config/globals';
import store from 'app/store/store';

/**
 * Verification and validation endpoints
 */

export function validateEmail(email) {
	return axios.post(`${API_URL}/validate/email`, {email});
}

export function validateNumberSignUp(number) {
	return axios.post(`${API_URL}/validate/number/signup`, {number});
}

export function validateNumberForgotPwd(number) {
	return axios.post(`${API_URL}/validate/number/forgotpwd`, {number});
}

export function verifyCode({number, code}) {
	return axios.post(`${API_URL}/validate/verify`, {number, code});
}

/**
 * Auth endpoints
 */

export function signUp({email, password, number}) {	
	return axios.post(`${API_URL}/users`, {number, password, email});
}

export function login({email, password}) {	
	return axios.post(`${API_URL}/login`, {password, email});
}

/**
 * Account actions endpoints
 */

const authHeaders = (token = '') => {
	return {
		headers: { Authorization: `Bearer ${token}` }
	};
};

export function loadProfile(query = '') {	
	const {token} = store.getState().profile.auth;
	return axios.get(`${API_URL}/user${query}`, authHeaders(token));
}

export function updateAccountProfile(profile) {	
	const {token} = store.getState().profile.auth;
	return axios.put(`${API_URL}/users/${profile.id}`, profile, authHeaders(token));
}


/**
 * WeCare contact endpoints
 */

export function loadWeCareContacts() {	
	const {token} = store.getState().profile.auth;
	return axios.get(`${API_URL}/wecare`, authHeaders(token));
}

export function addWeCareContact(data) {	
	const {token} = store.getState().profile.auth;
	return axios.post(`${API_URL}/wecare`, data, authHeaders(token));
}

export function updateWeCareContact(data) {	
	const {token} = store.getState().profile.auth;
	return axios.put(`${API_URL}/wecare/${data.id}`, data, authHeaders(token));
}

export function deleteWeCareContact(id) {	
	const {token} = store.getState().profile.auth;
	return axios.delete(`${API_URL}/wecare/${id}`, authHeaders(token));
}

/**
 * Guardians endpoints
 */

export function updateGuardiansConfigs(data) {	
	const {auth, account: {profile: {id}}} = store.getState().profile;
	return axios.put(`${API_URL}/guardian/${id}`, data, authHeaders(auth.token));
}