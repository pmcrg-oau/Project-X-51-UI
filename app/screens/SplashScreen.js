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
		height: "auto",
		marginTop: -10,
		marginBottom: 10,
	},
	whiteSplashImage: {
		width: "100%",
		height: 402,
	},
	bottomContent: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 60
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
