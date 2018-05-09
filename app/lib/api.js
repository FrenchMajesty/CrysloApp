import { API_URL }  from 'app/config/globals';
import axios from 'axios';

export function validateEmail(email) {
	return axios.post(`${API_URL}/validate/email`, {email});
}

export function validateNumber(number) {
	return axios.post(`${API_URL}/validate/number`, {number});
}

export function verifyCode({number, code}) {
	return axios.post(`${API_URL}/validate/verify`, {number, code});
}

export function signUp({email, password, number}) {	
	return axios.post(`${API_URL}/validate/verify`, {number, password, email});
}