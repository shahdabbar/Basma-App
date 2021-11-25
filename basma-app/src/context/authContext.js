import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext({});

export const AuthContextWrapper = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	// const login = async (email, password) => {
	// 	try {
	// 		const response = await axios.post('auth/login', { email, password });
	// 		const token = response.data.token;

	// 		console.log('response', response.data);

	// 		localStorage.setItem('token', token)
	// 		userProfile();
	// 	} catch (error) {
	// 		console.log(error);
	// 		// setError(error)
	// 	}
	// };.

	const register = async (name, email, password, password_confirmation) => {
		try {
			let data = {
				name,
				email,
				password,
				password_confirmation,
			};
			const response = await axios.post('auth/register', data);
			const result = response.data;
			console.log(result);
			localStorage.setItem('user-info', JSON.stringify(result.user));
			localStorage.setItem(
				'token',
				JSON.stringify(result.token.original.token)
			);
			navigate('/');
		} catch (error) {
			console.log(error);
			// setError(error)
		}
	};

	const logout = async () => {
		try {
			await axios.post('auth/logout');
			setUser(null);
			localStorage.removeItem('user-info');
			localStorage.removeItem('token');
		} catch (error) {
			console.log(error);
			// setError(error)
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				error,
				register,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
