import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	Pressable,
	ScrollView,
} from "react-native";

import Banner from "../components/Banner";
import Login from "../components/Login";
import Signup from "../components/Signup";

const LoginSignup = ({ setLoggedIn }) => {
	const [activeTab, setActiveTab] = useState("signup");

	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<Banner signupBanner={true} />
				<View style={styles.loginSignupContainer}>
					<View style={styles.tab}>
						<Pressable
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
						</Pressable>
						<Pressable
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
						</Pressable>
					</View>

					{activeTab === "signup" ? (
						<Signup setActiveTab={setActiveTab} setLoggedIn={setLoggedIn} />
					) : (
						<Login setActiveTab={setActiveTab} setLoggedIn={setLoggedIn} />
					)}
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		height: "100%",
		// fontFamily: "Red Rose",
	},
	scrollView: {
		flexGrow: 1,
		flexDirection: "column",
		alignItems: "center",
		paddingBottom: 20,
	},
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
		backgroundColor: "#ed4949",
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
		color: "#fff",
		fontSize: 14,
		fontFamily: "Red Rose",
	},
	signupButton: {
		color: "#fff",
		fontSize: 14,
		fontFamily: "Red Rose",
	},
	activeTabButton: {
		backgroundColor: "#fff",
	},
	active: {
		color: "#ED4949",
	},
});

export default LoginSignup;
