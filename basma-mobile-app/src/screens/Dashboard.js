import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomersTable from '../components/CustomersTable';
import AverageBar from '../components/AverageBar';

const Tab = createMaterialTopTabNavigator();

function Dashboard() {
	return (
		<Tab.Navigator
			initialRouteName='Customers'
			screenOptions={{
				tabBarLabelStyle: { fontSize: 14 },
				tabBarIndicatorStyle: { backgroundColor: '#ffba00', height: 3 },
			}}
		>
			<Tab.Screen name='Customers' component={CustomersTable} />
			<Tab.Screen name='Average' component={AverageBar} />
		</Tab.Navigator>
	);
}

export default Dashboard;
