import React from "react";
import { TouchableOpacity, StyleSheet, Text  } from 'react-native';
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";


import CustomDrawerContainer from "../components/CustomDrawerContainer";
import Dashboard from "./Home/Dashboard";
import BMIScreen from "./BMI/BMIScreen";
import Profile from "./Profile";


const DrawerScreen = ({ setLoggedIn }) => {
	const Drawer = createDrawerNavigator();

	return (
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
	);
};

const styles = StyleSheet.create({
	iconStyle: {
		marginLeft: 10,
	},
	headerTextStyle: {
		color: "#ed4949",
		fontSize: 18,
		fontFamily: 'Red Rose',
		paddingRight: 10,
	},
});

export default DrawerScreen;
