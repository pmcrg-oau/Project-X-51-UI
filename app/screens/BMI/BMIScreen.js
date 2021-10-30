import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BMICalculator from './BMICalculator';
import BMIResult from './BMIResult';

const Stack = createStackNavigator();

const BMIScreen = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerMode: 'screen',
				headerShown: true,
				headerStyle: {
					backgroundColor: '#ed4949',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen
				name='BMICalculator'
				component={BMICalculator}
				options={{
					title: 'Calculate BMI',
				}}
			/>
			<Stack.Screen
				name='BMIResult'
				component={BMIResult}
				options={{
					title: 'BMI Result',
					headerBackTitle: 'Back',
				}}
			/>
		</Stack.Navigator>
	);
};

export default BMIScreen;
