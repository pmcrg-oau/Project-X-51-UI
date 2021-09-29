import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const DailyIntakeContainer = () => {
	return (
		<View style={styles.dailyIntakeContainer}>
			<Text style={styles.dailyIntakeText}>Daily intake</Text>
			<Text style={styles.intakeResult}>4600KCal</Text>
			<Text style={styles.nutritionBreakText}>
				Carbs(50%) Protein(30%) Fat(20%)
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	dailyIntakeContainer: {
		width: "85%",
		backgroundColor: "#ed4949",
		borderRadius: 20,
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	dailyIntakeText: {
		fontWeight: "bold",
		color: "rgba(196, 196, 196, 0.53)",
		fontSize: 12,
		marginBottom: 5,
		fontFamily: "Red Rose",
	},
	intakeResult: {
		fontWeight: "bold",
		color: "#fff",
		fontSize: 36,
		marginBottom: 15,
		fontFamily: "Red Rose",
	},
	nutritionBreakText: {
		color: "#c4c4c4",
		fontWeight: "bold",
		fontSize: 12,
		fontFamily: "Red Rose",
	},
});

export default DailyIntakeContainer;
