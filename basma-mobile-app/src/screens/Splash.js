import React from 'react';
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Svg, Circle, ClipPath, Image } from 'react-native-svg';

function Splash({ navigation }) {
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
			<StatusBar barStyle='light-content' backgroundColor='#fff' />
			<View>
				<Text
					style={{
						fontSize: 80,
						fontWeight: 'bold',
						textAlign: 'center',
						color: 'black',
					}}
				>
					Hello
				</Text>
				<Text style={{ textAlign: 'center', color: 'gray' }}>
					Sign in to your account
				</Text>
				<TouchableOpacity
					style={styles.box}
					onPress={() => navigation.navigate('Login')}
				>
					<Text style={styles.text}>Sign in</Text>
				</TouchableOpacity>
				<Text style={{ textAlign: 'center' }}>
					Don't have an account?{' '}
					<Text
						style={{
							fontWeight: '700',
							textDecorationLine: 'underline',
						}}
					>
						Create
					</Text>
				</Text>
			</View>
		</SafeAreaView>
	);
}

export default Splash;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	box: {
		width: 340,
		height: 55,
		backgroundColor: '#ffba00',
		borderRadius: 40,
		borderWidth: 1,
		borderColor: '#ffba00',
		marginVertical: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: { width: 2, height: 2 },
		shadowColor: 'black',
		shadowOpacity: 0.5,
		elevation: 10,
	},
	text: {
		color: '#000',
		fontSize: 16,
		fontWeight: '700',
	},
});

// {
// 	/* <SvgUri
// 						width='100%'
// 						height='100%'
// 						uri='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/circles1.svg'
// 					/> */
// }
