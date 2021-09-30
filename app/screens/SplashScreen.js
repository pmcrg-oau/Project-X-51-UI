import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ProgressBar from "react-native-animated-progress";

const SplashScreen = () => {
	return (
		<View style={styles.background}>
			<View style={styles.whiteSplash}>
				<Image
					style={styles.whiteSplashImage}
					source={require("../assets/images/splash-screen.png")}
				/>
			</View>
			<View style={styles.bottomContent}>
				<Text style={styles.bottomContentText}>
					Maintain Your Weight While Eating Healthy
				</Text>

				<View
					style={{
						width: "80%",
					}}
				>
					<ProgressBar
						progress={50}
						height={5}
						indeterminate
						backgroundColor="rgba(237, 73, 73, 0.64)"
						trackColor="#fff"
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		overflow: "hidden",
		backgroundColor: "#ed4949",
	},
	whiteSplash: {
		width: "100%",
		height: "50%",
		marginBottom: 20,
	},
	whiteSplashImage: {
		width: "100%",
		height: "100%",
	},
	bottomContent: {
		height: "50%",
		alignItems: "center",
		justifyContent: "space-between",
		paddingTop: 90,
		paddingBottom: 100,
	},
	bottomContentText: {
		fontSize: 18,
		fontFamily: "Rockwell",
		color: "#fff",
		textAlign: "center",
		lineHeight: 22,
	},
});

export default SplashScreen;
