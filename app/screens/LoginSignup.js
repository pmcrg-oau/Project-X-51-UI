import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Login from "../components/Login";
import Signup from "../components/Signup";

const LoginSignup = () => {
	const [activeTab, setActiveTab] = useState("signup");

	return (
		<View style={styles.loginSignupContainer}>
			<View style={styles.tab}>
				<TouchableOpacity
					style={[
						styles.tabButtons,
						activeTab === "signup" ? styles.activeTabButton : {},
					]}
					onPress={() => setActiveTab("signup")}
				>
					<Text
						style={[
							styles.signupButton,
							activeTab === "signup" ? styles.active : {},
						]}
					>
						Sign Up
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.tabButtons,
						activeTab === "login" ? styles.activeTabButton : {},
					]}
					onPress={() => setActiveTab("login")}
				>
					<Text
						style={[
							styles.loginButton,
							activeTab === "login" ? styles.active : {},
						]}
					>
						Log In
					</Text>
				</TouchableOpacity>
			</View>

			{activeTab === "signup" ? (
				<Signup setActiveTab={setActiveTab} />
			) : (
				<Login setActiveTab={setActiveTab} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	loginSignupContainer: {
		alignItems: "center",
		backgroundColor: "#fff",
		shadowColor: "#e5e5e5",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 4,
		elevation: 3,
		borderRadius: 30,
		width: "100%",
		minHeight: 466,
		maxWidth: 364,
		marginVertical: 0,
		marginTop: -40,
		paddingVertical: 57,
	},
	tab: {
		width: 216,
		height: 44,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 20,
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: "#ed494940",
		shadowColor: "rgba(0, 0, 0, 0.25)",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 4,
		elevation: -2,
	},
	tabButtons: {
		width: 87,
		height: 28,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: "transparent",
	},
	loginButton: {
		color: "#ED4949",
		fontSize: 14,
	},
	signupButton: {
		color: "#ED4949",
		fontSize: 14,
	},
	activeTabButton: {
		backgroundColor: "#ED4949",
	},
	active: {
		color: "#fff",
	},
});

export default LoginSignup;
