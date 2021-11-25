import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const api = axios.create({
	baseURL: 'http://192.168.0.107:8000/api/',
});

api.interceptors.request.use(
	async (config) => {
		config.headers.Accept = 'application/json';
		let token = await SecureStore.getItemAsync('token');
		if (token) {
			config.headers.Authorization = 'Bearer ' + token;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default api;
