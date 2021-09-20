import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Font } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { EvilIcons, AntDesign } from "@expo/vector-icons";

import LoginSignup from "./app/screens/LoginSignup";
import BMIScreen from "./app/screens/BMIScreen";
import Dashboard from "./app/screens/Dashboard";
import CustomDrawerContainer from "./app/components/CustomDrawerContainer";
import Vibes from "./app/screens/Vibes";

export default function App() {
	// useEffect(() => {
	//   Font.loadAsync({
	//     "Red Rose": require("./app/assets/fonts/RedRose-VariableFont_wght.ttf"),
	//   });
	// }, []);
	const [loggedIn, setLoggedIn] = useState(true);
	const Drawer = createDrawerNavigator();

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
						name="Vibes"
						component={Vibes}
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
				</Drawer.Navigator>
			) : (
				<LoginSignup setLoggedIn={setLoggedIn} />
			)}
		</NavigationContainer>
	);
}


const styles = StyleSheet.create({
	iconStyle: {
		marginLeft: 10
	}
});
