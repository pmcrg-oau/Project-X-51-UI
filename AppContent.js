import React, { useContext } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

import LoginSignup from './app/screens/LoginSignup';
import MealPlan from './app/screens/Home/MealPlan';
import Workout from './app/screens/Home/Workout';
import Water from './app/screens/Home/Water';
import BMIScreen from './app/screens/BMI/BMIScreen';
import DrawerScreen from './app/screens/DrawerScreen';
import Menu from './app/screens/Home/Menu';
import TodayMealsContextProvider from './app/components/TodayMealsContextProvider';
import { LoginContext } from './app/contexts/LoginContext';

const AppContent = () => {
	const { loggedInUser, setLoggedInUser } = useContext(LoginContext);
	const Stack = createStackNavigator();
	const verticalAnimation = {
		gestureDirection: 'vertical',
		cardStyleInterpolator: ({ current, layouts }) => {
			return {
				cardStyle: {
					transform: [
						{
							translateY: current.progress.interpolate({
								inputRange: [0, 1],
								outputRange: [layouts.screen.height, 0],
							}),
						},
					],
				},
			};
		},
	};

	const horizontalAnimation = {
		cardStyleInterpolator: ({ current, layouts }) => {
			return {
				cardStyle: {
					transform: [
						{
							translateX: current.progress.interpolate({
								inputRange: [0, 1],
								outputRange: [layouts.screen.width, 0],
							}),
						},
					],
				},
			};
		},
	};

	return [...Object.entries(loggedInUser)].length > 0 ? (
		<TodayMealsContextProvider>
			{!loggedInUser?.history?.bmi ? (
				<Stack.Navigator screenOptions={{ headerMode: 'screen' }}>
					<Stack.Screen
						name='BMIScreen'
						component={BMIScreen}
						options={{
							title: null,
							headerLeft: () => null
						}}
					/>
				</Stack.Navigator>
			) : (
				<Stack.Navigator screenOptions={{ headerMode: 'screen' }}>
					<Stack.Screen
						name='Drawer'
						children={() => (
							<DrawerScreen
								setLoggedInUser={setLoggedInUser}
							/>
						)}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='Meal Plan'
						component={MealPlan}
						options={({ navigation }) => ({
							title: null,
							headerLeft: () => (
								<Pressable onPress={() => navigation.goBack()}>
									<AntDesign
										style={styles.iconStyle}
										name={'arrowleft'}
										size={35}
										color={'#ED4949'}
									/>
								</Pressable>
							),
							headerRight: () => (
								<Text style={styles.headerTextStyle}>Meal Plan</Text>
							),
						})}
					/>
					<Stack.Screen
						name='Menu'
						component={Menu}
						options={({ navigation }) => ({
							title: null,
							headerLeft: () => (
								<Pressable onPress={() => navigation.goBack()}>
									<AntDesign
										style={styles.iconStyle}
										name={'arrowleft'}
										size={35}
										color={'#ED4949'}
									/>
								</Pressable>
							),
							headerRight: () => (
								<Text style={styles.headerTextStyle}>Menu</Text>
							),
							...verticalAnimation,
						})}
					/>
					<Stack.Screen
						name='Workout'
						component={Workout}
						options={({ navigation }) => ({
							title: null,
							headerLeft: () => (
								<Pressable onPress={() => navigation.goBack()}>
									<AntDesign
										style={styles.iconStyle}
										name={'arrowleft'}
										size={35}
										color={'#ED4949'}
									/>
								</Pressable>
							),
							headerRight: () => (
								<Text style={styles.headerTextStyle}>Workout</Text>
							),
							...horizontalAnimation,
						})}
					/>
					<Stack.Screen
						name='Water'
						component={Water}
						options={({ navigation }) => ({
							title: null,
							headerLeft: () => (
								<Pressable onPress={() => navigation.goBack()}>
									<AntDesign
										style={styles.iconStyle}
										name={'arrowleft'}
										size={35}
										color={'#ED4949'}
									/>
								</Pressable>
							),
							headerRight: () => (
								<Text style={styles.headerTextStyle}>Water</Text>
							),
							...verticalAnimation,
						})}
					/>
				</Stack.Navigator>
			)}
		</TodayMealsContextProvider>
	) : (
		<LoginSignup setLoggedInUser={setLoggedInUser} />
	);
};

const styles = StyleSheet.create({
	iconStyle: {
		marginLeft: 10,
	},
	headerTextStyle: {
		color: '#ed4949',
		fontSize: 18,
		fontFamily: 'Red Rose',
		paddingRight: 10,
	},
});

export default AppContent;
