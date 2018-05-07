import { API_URL }  from 'app/config/globals';
import axios from 'axios';

export function validateEmail(email) {
	return axios.post(`${API_URL}/validate/email`, {email})
}