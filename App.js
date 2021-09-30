import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import LoginSignup from "./app/screens/LoginSignup";
import SplashScreen from "./app/screens/SplashScreen";
import MealPlan from "./app/screens/Home/MealPlan";
import Workout from "./app/screens/Home/Workout";
import Water from "./app/screens/Home/Water";
import DrawerScreen from "./app/screens/DrawerScreen";
import Menu from "./app/screens/Home/Menu";
import TodayMealsContextProvider from "./app/components/TodayMealsContextProvider";

export default function App() {
	const [showSplashScreen, setShowSplashScreen] = useState(true);
	const [loggedIn, setLoggedIn] = useState(true);
	const Stack = createStackNavigator();

	const verticalAnimation = {
		gestureDirection: "vertical",
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

	let [fontsLoaded] = useFonts({
		"Red Rose": require("./app/assets/fonts/RedRose-VariableFont_wght.ttf"),
	});

	useEffect(() => {
		if (fontsLoaded) {
			setTimeout(() => {
				setShowSplashScreen(false);
			}, 2000);
		}
	}, [fontsLoaded]);

	if (showSplashScreen) {
		return <SplashScreen />;
	} else {
		return (
			<NavigationContainer>
				{loggedIn ? (
					<TodayMealsContextProvider>
						<Stack.Navigator
							headerMode="screen"
						>
							<Stack.Screen
								name="Drawer"
								children={() => <DrawerScreen setLoggedIn={setLoggedIn} />}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name="Meal Plan"
								component={MealPlan}
								options={({ navigation }) => ({
									title: null,
									headerLeft: () => (
										<TouchableOpacity onPress={() => navigation.goBack()}>
											<AntDesign
												style={styles.iconStyle}
												name={"arrowleft"}
												size={35}
												color={"#ED4949"}
											/>
										</TouchableOpacity>
									),
									headerRight: () => (
										<Text style={styles.headerTextStyle}>Meal Plan</Text>
									),
								})}
							/>
							<Stack.Screen
								name="Menu"
								component={Menu}
								options={({ navigation }) => ({
									title: null,
									headerLeft: () => (
										<TouchableOpacity onPress={() => navigation.goBack()}>
											<AntDesign
												style={styles.iconStyle}
												name={"arrowleft"}
												size={35}
												color={"#ED4949"}
											/>
										</TouchableOpacity>
									),
									headerRight: () => (
										<Text style={styles.headerTextStyle}>Menu</Text>
									),
									...verticalAnimation
								})}
							/>
							<Stack.Screen
								name="Workout"
								component={Workout}
								options={({ navigation }) => ({
									title: null,
									headerLeft: () => (
										<TouchableOpacity onPress={() => navigation.goBack()}>
											<AntDesign
												style={styles.iconStyle}
												name={"arrowleft"}
												size={35}
												color={"#ED4949"}
											/>
										</TouchableOpacity>
									),
									headerRight: () => (
										<Text style={styles.headerTextStyle}>Workout</Text>
									),
									...horizontalAnimation
								})}
							/>
							<Stack.Screen
								name="Water"
								component={Water}
								options={({ navigation }) => ({
									title: null,
									headerLeft: () => (
										<TouchableOpacity onPress={() => navigation.goBack()}>
											<AntDesign
												style={styles.iconStyle}
												name={"arrowleft"}
												size={35}
												color={"#ED4949"}
											/>
										</TouchableOpacity>
									),
									headerRight: () => (
										<Text style={styles.headerTextStyle}>Water</Text>
									),
									...verticalAnimation
								})}
							/>
						</Stack.Navigator>
					</TodayMealsContextProvider>
				) : (
					<>
						<LoginSignup setLoggedIn={setLoggedIn} />
					</>
				)}
			</NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({
	iconStyle: {
		marginLeft: 10,
	},
	headerTextStyle: {
		color: "#ed4949",
		fontSize: 18,
		paddingRight: 10,
	},
});
