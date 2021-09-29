import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { EvilIcons, AntDesign } from "@expo/vector-icons";

import LoginSignup from "./app/screens/LoginSignup";
import BMIScreen from "./app/screens/BMIScreen";
import Dashboard from "./app/screens/Dashboard";
import CustomDrawerContainer from "./app/components/CustomDrawerContainer";
import Profile from "./app/screens/Profile";
import SplashScreen from "./app/screens/SplashScreen";

export default function App() {
	const [showSplashScreen, setShowSplashScreen] = useState(true);
	const [loggedIn, setLoggedIn] = useState(true);
	const Drawer = createDrawerNavigator();

	let [fontsLoaded] = useFonts({
		"Red Rose": require("./app/assets/fonts/RedRose-VariableFont_wght.ttf"),
	});

	useEffect(() => {
		if(fontsLoaded) {
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
					<Drawer.Navigator
						initialRouteName="Home"
						drawerContent={(props) => (
							<CustomDrawerContainer setLoggedIn={setLoggedIn} {...props} />
						)}
					>
						<Drawer.Screen
							name="Home"
							component={Dashboard}
							options={({ navigation }) => ({
								drawerLabel: () => null,
								title: null,
								headerLeft: () => (
									<TouchableOpacity onPress={() => navigation.openDrawer()}>
										<EvilIcons
											style={styles.iconStyle}
											name={"navicon"}
											size={35}
											color={"#ED4949"}
										/>
									</TouchableOpacity>
								),
							})}
						/>
						<Drawer.Screen
							name="BMIScreen"
							component={BMIScreen}
							options={({ navigation }) => ({
								drawerLabel: () => null,
								title: null,
								headerLeft: () => (
									<TouchableOpacity onPress={() => navigation.openDrawer()}>
										<EvilIcons
											style={styles.iconStyle}
											name={"navicon"}
											size={35}
											color={"#ED4949"}
										/>
									</TouchableOpacity>
								),
							})}
						/>
						<Drawer.Screen
							name="Profile"
							component={Profile}
							options={({ navigation }) => ({
								drawerLabel: () => null,
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
									<Text style={styles.headerTextStyle}>Profile</Text>
								),
							})}
						/>
					</Drawer.Navigator>
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
		color: '#ed4949',
		fontSize: 18,
		paddingRight: 10
	}
});
