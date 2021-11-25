import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { DataTable } from 'react-native-paper';
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	View,
	ActivityIndicator,
	TextInput,
	ScrollView,
} from 'react-native';

const CustomersTable = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [customers, setCustomers] = useState(null);
	const [search, setSearch] = useState('');
	const numberOfItemsPerPageList = [10, 20, 30];
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [page, setPage] = useState(0);
	const [numberOfItemsPerPage, onItemsPerPageChange] = useState(
		numberOfItemsPerPageList[0]
	);
	const from = page;
	const to = Math.min((page + 1) * numberOfItemsPerPage, numberOfPages);

	useEffect(() => {
		setPage(0);
		getCustomers();
	}, [numberOfItemsPerPage]);

	useEffect(() => {
		getCustomers();
	}, [search, page]);

	const getCustomers = async () => {
		const response = await axios.get(
			`customers?page=${
				page + 1
			}&perPage=${numberOfItemsPerPage}&keyword=${search}`
		);
		const data = response.data;

		setNumberOfPages(data.customers.last_page);
		setCustomers(data.customers.data);
		setIsLoading(false);
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle='light-content' backgroundColor='#fff' />
			{isLoading ? (
				<View
					style={{
						...StyleSheet.absoluteFill,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<ActivityIndicator size='large' color='#bad555' />
				</View>
			) : null}
			<TextInput
				style={styles.textinput}
				placeholder='Search by Id, name or email'
				placeholderTextColor='#dddddd'
				onChangeText={(value) => {
					setSearch(value), setPage(0);
				}}
			/>
			<ScrollView style={{ flex: 1, marginVertical: 20 }}>
				<DataTable>
					<DataTable.Row>
						<DataTable.Cell>ID</DataTable.Cell>
						<DataTable.Cell>Name</DataTable.Cell>
						<DataTable.Cell style={{ flex: 1.5 }}>Email</DataTable.Cell>
					</DataTable.Row>
					{customers &&
						customers.map((customers) => (
							<DataTable.Row key={customers.id}>
								<DataTable.Cell>{customers.id}</DataTable.Cell>
								<DataTable.Cell>{customers.name}</DataTable.Cell>
								<DataTable.Cell style={{ flex: 1.5 }}>
									{customers.email}
								</DataTable.Cell>
							</DataTable.Row>
						))}

					<DataTable.Pagination
						page={page}
						numberOfPages={numberOfPages}
						onPageChange={(page) => setPage(page)}
						label={`${from + 1}-${to} of ${numberOfPages}`}
						// showFastPaginationControls
						numberOfItemsPerPageList={numberOfItemsPerPageList}
						numberOfItemsPerPage={numberOfItemsPerPage}
						onItemsPerPageChange={onItemsPerPageChange}
						selectPageDropdownLabel={'Rows per page'}
					/>
				</DataTable>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CustomersTable;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 10,
	},
	textinput: {
		fontSize: 16,
		color: 'white',
		width: '100%',
		height: 55,
		backgroundColor: '#7442C8',
		borderRadius: 0,
		borderWidth: 1,
		borderColor: '#7851A9',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		shadowOffset: { width: 2, height: 2 },
		shadowColor: 'black',
		shadowOpacity: 0.5,
		elevation: 10,
	},
});
