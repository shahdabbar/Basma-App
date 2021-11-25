import React, { useState } from 'react';
import axios from '../services/api';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = React.createContext({});

export const AuthContextWrapper = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	const login = async (email, password) => {
		try {
			const response = await axios.post('auth/login', { email, password });
			const token = response.data.token;

			setIsAuthenticated(true);
			await SecureStore.setItemAsync('token', token);
			userProfile();
		} catch (error) {
			console.log(error);
			// setError(error)
		}
	};

	const logout = async () => {
		try {
			const response = await axios.post('auth/logout');
			setUser(null);
			setIsAuthenticated(false);
			await SecureStore.deleteItemAsync('token');
		} catch (error) {
			console.log(error);
			// setError(error)
		}
	};

	const userProfile = async () => {
		try {
			const response = await axios.get('auth/profile');
			const data = response.data;
			setUser(data);
			let token = await SecureStore.getItemAsync('token');
		} catch (error) {
			// setError(error)
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				error,
				isAuthenticated,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
