import React, { useContext, useState } from 'react';
import {
	KeyboardAvoidingView,
	Keyboard,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { AuthContext } from '../context/authContext';
import { Svg, Image } from 'react-native-svg';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

function Login() {
	const { login } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					...StyleSheet.absoluteFill,
				}}
			>
				<Svg height='100%' width='100%'>
					<Image
						x='0%'
						y='20%'
						href={require('../constants/icons/bg-intro.png')}
						width='100%'
						height='100%'
						preserveAspectRatio='xMidYMid slice'
						ClipPath='url(#clip)'
					/>
				</Svg>
			</View>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<KeyboardAvoidingView behavior='padding'>
					<StatusBar barStyle='light-content' />
					<View>
						<Text
							style={{
								fontSize: 30,
								fontWeight: 'bold',
								textAlign: 'center',
								marginVertical: 30,
							}}
						>
							Welcome back!
						</Text>
						<View style={styles.form}>
							<View style={styles.textbox}>
								<FontAwesome name='user' size={22} color='black' />
								<TextInput
									style={styles.input}
									placeholder='Email'
									placeholderTextColor='#ccc'
									onChangeText={(value) => setEmail(value)}
								/>
							</View>
							<View style={styles.textbox}>
								<FontAwesome name='lock' size={22} color='black' />
								<TextInput
									style={styles.input}
									placeholder='Password'
									secureTextEntry={true}
									placeholderTextColor='#ccc'
									onChangeText={(value) => setPassword(value)}
								/>
							</View>
							<Text
								style={{
									textAlign: 'right',
									marginHorizontal: 20,
									color: 'gray',
								}}
							>
								Forget your password?
							</Text>

							<View style={styles.signin_container}>
								<Text style={styles.text}>Sign in</Text>
								<TouchableOpacity
									style={styles.signinbtn}
									onPress={() => login(email, password)}
								>
									<FontAwesome
										name='arrow-right'
										size={22}
										color='black'
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
}

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textbox: {
		width: 320,
		height: 55,
		backgroundColor: '#fff',
		borderRadius: 40,
		borderWidth: 1,
		borderColor: '#fff',
		marginVertical: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingHorizontal: 20,
		alignItems: 'center',
		shadowOffset: { width: 2, height: 2 },
		shadowColor: 'black',
		shadowOpacity: 0.5,
		elevation: 10,
	},
	input: {
		width: '100%',
		height: '100%',
		padding: 10,
	},
	signin_container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	signinbtn: {
		marginVertical: 50,
		marginLeft: 10,
		width: 50,
		height: 50,
		backgroundColor: '#ffba00',
		borderRadius: 40,
		borderWidth: 1,
		borderColor: '#ffba00',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: { width: 2, height: 2 },
		shadowColor: 'black',
		shadowOpacity: 0.5,
		elevation: 20,
	},
	text: {
		fontSize: 26,
		fontWeight: 'bold',
	},
});
