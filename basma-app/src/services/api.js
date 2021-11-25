import axios from 'axios';

const api = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/',
});

api.interceptors.request.use(
	async (config) => {
		config.headers.Accept = 'application/json';
		let token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = 'Bearer ' + token;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default api;
