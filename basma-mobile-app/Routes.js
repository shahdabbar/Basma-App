import React, { useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './src/context/authContext';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';
import Dashboard from './src/screens/Dashboard';
import { Text, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

const Routes = () => {
	const { isAuthenticated, logout } = useContext(AuthContext);
	const [token, setToken] = useState(null);

	useEffect(async () => {
		// await SecureStore.deleteItemAsync('token');
		let isMounted = true;
		let token = await SecureStore.getItemAsync('token');
		if (isMounted) {
			setToken(token);
		}
		return () => {
			isMounted = false;
		};
	}, [isAuthenticated]);

	return (
		<NavigationContainer>
			{!isAuthenticated && token == null ? (
				<RootStack.Navigator screenOptions={{ headerShown: false }}>
					<RootStack.Screen
						// options={{ headerShown: false }}
						name='Splash'
						component={Splash}
					/>
					<RootStack.Screen
						options={{ headerShown: true }}
						name='Login'
						component={Login}
					/>
				</RootStack.Navigator>
			) : (
				<Stack.Navigator
					screenOptions={{
						headerShown: true,
						headerTitleStyle: {
							fontWeight: 'bold',
						},
						headerRight: () => (
							<TouchableOpacity
								style={{ marginRight: 20 }}
								onPress={() => logout()}
							>
								<Feather name='log-out' size={22} color='black' />
							</TouchableOpacity>
						),
					}}
				>
					<Stack.Screen name='Dashboard' component={Dashboard} />
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
};

export default Routes;
