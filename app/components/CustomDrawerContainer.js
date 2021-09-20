import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { EvilIcons, AntDesign } from "@expo/vector-icons";

const CustomDrawerContainer = ({ setLoggedIn, ...props }) => {
	const routeNames = props.state.routeNames;
	const routeIndex = props.state.index;

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.container}>
				<DrawerContentScrollView {...props}>
					<TouchableOpacity style={styles.backButton} onPress={() => props.navigation.closeDrawer()}>
						<EvilIcons
							style={styles.iconStyle}
							name={"chevron-left"}
							size={35}
							color={"#ED4949"}
						/>
					</TouchableOpacity>

					<View style={styles.logoContainer}>
						<Image
							style={styles.image}
							fadeDuration={0}
							resizeMode={"contain"}
							source={{
								uri: "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
							}}
						/>
					</View>

					<TouchableOpacity
						style={[
							styles.navContainer,
							routeNames[routeIndex] === "Home" && styles.navContainerActive,
						]}
						onPress={() => {
							props.navigation.navigate("Home");
						}}
					>
						<AntDesign
							style={styles.iconStyle}
							name={"home"}
							size={25}
							color={routeNames[routeIndex] === "Home" ? "#ED4949" : "black"}
						/>

						<Text
							style={[
								styles.drawerText,
								routeNames[routeIndex] === "Home" && styles.drawerTextActive,
							]}
						>
							Home
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[
							styles.navContainer,
							routeNames[routeIndex] === "BMIScreen" &&
								styles.navContainerActive,
						]}
						onPress={() => {
							props.navigation.navigate("BMIScreen");
						}}
					>
						<AntDesign
							style={styles.iconStyle}
							name={"contacts"}
							size={25}
							color={
								routeNames[routeIndex] === "BMIScreen" ? "#ED4949" : "black"
							}
						/>

						<Text
							style={[
								styles.drawerText,
								routeNames[routeIndex] === "BMIScreen" &&
									styles.drawerTextActive,
							]}
						>
							BMI
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[
							styles.navContainer,
							routeNames[routeIndex] === "Vibes" && styles.navContainerActive,
						]}
						onPress={() => {
							props.navigation.navigate("Vibes");
						}}
					>
						<EvilIcons
							name={"question"}
							size={30}
							color={routeNames[routeIndex] === "Vibes" ? "#ED4949" : "black"}
						/>
						<Text
							style={[
								styles.drawerText,
								routeNames[routeIndex] === "Vibes" && styles.drawerTextActive,
							]}
						>
							Vibes
						</Text>
					</TouchableOpacity>
				</DrawerContentScrollView>
			</View>

			<TouchableOpacity
				style={styles.logoutContainer}
				onPress={() => setLoggedIn(false)}
			>
				<Text style={styles.logoutText}>SIGN OUT</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 25 : 0,
	},
	backButton: {
		marginVertical: 8,
		width: '100%',
		alignItems: 'flex-end',
	},
	container: {
		alignItems: "center",
		width: "100%",
		height: "90%",
	},
	logoContainer: {
		width: "100%",
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 25,
		padding: 5,
	},
	image: {
		resizeMode: "contain",
		width: "80%",
		height: "100%",
	},
	navContainer: {
		flexDirection: "row",
		minWidth: "95%",
		height: 50,
		alignItems: "center",
		paddingLeft: 15,
		marginVertical: 10,
		borderRadius: 11,
	},
	navContainerActive: {
		backgroundColor: "rgba(237, 73, 73, .3)",
	},
	logoutContainer: {
		flexDirection: "row",
		width: "100%",
		height: 50,
		alignItems: "flex-end",
		justifyContent: "center",
	},
	drawerText: {
		marginLeft: 16,
		fontWeight: "bold",
		color: "black",
	},
	drawerTextActive: {
		color: "#ED4949",
	},
	logoutText: {
		color: "#b23b3b",
	},
});

export default CustomDrawerContainer;
