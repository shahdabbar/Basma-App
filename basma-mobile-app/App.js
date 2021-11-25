import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContextWrapper } from './src/context/authContext';
import Routes from './Routes';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
	return (
		<AuthContextWrapper>
			<PaperProvider style={styles.container}>
				<Routes />
			</PaperProvider>
		</AuthContextWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
