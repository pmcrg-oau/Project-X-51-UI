import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Banner from "../components/Banner";
import Button from "../components/Button";

const BMIResult = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<Banner />

				<View style={styles.bmiResultContainer}>
					<Text style={styles.titleText}>Result</Text>
					<View style={styles.resultShowcase}>
						<Text style={styles.introductoryText}>Your Current BMI is:</Text>
						<Text style={styles.resultText}>44.6</Text>
					</View>
					<Text style={styles.resultSummary}>
						With your current BMI, you fall into category of{" "}
						<Text style={styles.resultCategory}>Underweights</Text>, we kindly
						recommend you level up your calories.{" "}
					</Text>
					<Button
						text={"Recalculate your BMI"}
						onPress={() => navigation.navigate("BMICalculator")}
						buttonStyle={styles.buttonStyle}
						textStyle={styles.buttonTextStyle}
					/>
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
	bmiResultContainer: {
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
		paddingVertical: 37,
	},
	titleText: {
		fontSize: 48,
		color: "#ed4949",
		fontWeight: "bold",
		marginBottom: 20,
	},
	resultShowcase: {
		borderRadius: 30,
		backgroundColor: "#cac9c9",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		maxWidth: 263,
		height: 160,
		marginBottom: 20,
	},
	introductoryText: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
		marginBottom: 10,
	},
	resultText: {
		fontSize: 48,
		fontWeight: "bold",
		color: "#ed4949",
	},
	resultSummary: {
		width: "100%",
		maxWidth: 300,
		fontSize: 14,
		fontWeight: "bold",
		color: "#c4c9c9",
	},
	resultCategory: {
		color: "#ed4949",
	},
	buttonStyle: {
		width: "100%",
		maxWidth: 216,
		paddingVertical: 8,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ed4949",
		borderRadius: 10,
		shadowColor: "rgba(0, 0, 0, 0.25)",
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: 1,
		shadowRadius: 4,
		elevation: 10,
		marginTop: 48,
	},
	buttonTextStyle: {
		fontSize: 14,
		color: "#fff",
	},
});

export default BMIResult;
