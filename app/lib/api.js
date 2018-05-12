import { API_URL }  from 'app/config/globals';
import axios from 'axios';

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

export function signUp({email, password, number}) {	
	return axios.post(`${API_URL}/users`, {number, password, email});
}

export function login({email, password}) {	
	return axios.post(`${API_URL}/login`, {password, email});
}