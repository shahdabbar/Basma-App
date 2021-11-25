import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import { DATE_DATAPROVIDER } from '../shared/dataprovider/date-dataprovider.const';
import CircularProgress from 'react-native-circular-progress-indicator';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function AverageBar() {
	const [selectedDate, setSelectedDate] = useState(DATE_DATAPROVIDER[0].value);
	const [average, setAverage] = useState(0);

	useEffect(async () => {
		let isMounted = true;
		const response = await axios.get(`average?date=${selectedDate}`);
		const data = response.data;
		if (isMounted) {
			setAverage(data.customers / data.allCustomers);
		}
		return () => {
			isMounted = false;
		};
	}, [selectedDate]);

	return (
		<View style={styles.container}>
			<View>
				<ModalSelector
					data={DATE_DATAPROVIDER}
					initValue='Select period!'
					onChange={(selectedValue) => {
						setSelectedDate(selectedValue.value);
					}}
					selectTextStyle={{ fontWeight: 'bold', color: '#fff' }}
					selectStyle={styles.modalSelector}
					optionContainerStyle={{
						borderRadius: 15,
					}}
					cancelStyle={{ padding: 15, borderRadius: 15 }}
				/>
			</View>

			<View
				style={{
					marginVertical: 20,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<CircularProgress
					value={average * 100}
					radius={120}
					textColor={'#7442C8'}
					activeStrokeColor={'#f39c12'}
					inActiveStrokeColor={'#9b59b6'}
					inActiveStrokeOpacity={0.5}
					inActiveStrokeWidth={20}
					activeStrokeWidth={40}
					valueSuffix={'%'}
				/>
			</View>
		</View>
	);
}

export default AverageBar;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 10,
	},
	modalSelector: {
		width: windowWidth,
		height: 55,
		backgroundColor: '#7442C8',
		borderRadius: 0,
		borderWidth: 1,
		borderColor: '#7851A9',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: { width: 2, height: 2 },
		shadowColor: 'black',
		shadowOpacity: 0.5,
		elevation: 10,
	},
});
