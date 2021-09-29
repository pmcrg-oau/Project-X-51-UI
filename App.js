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

export default function App() {
	const [showSplashScreen, setShowSplashScreen] = useState(true);
	const [loggedIn, setLoggedIn] = useState(true);
	const Stack = createStackNavigator();

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
							})}
						/>
					</Stack.Navigator>
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
