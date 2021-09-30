import React from "react";
import { View, Text, StyleSheet } from 'react-native';


import GoalButton from "./GoalButton";

const DailyGoals = ({ navigation }) => {
	return (
		<>
			<Text style={styles.titleText}>Daily Goals</Text>
			<View style={styles.goalButtonsContainer}>
				<GoalButton
					text={"Meal Plan"}
					imageSrc={require("../assets/images/plate.png")}
					onPress={() => navigation.navigate('Meal Plan')}
				/>
				<GoalButton
					text={"Workout"}
					imageSrc={require("../assets/images/workout.png")}
					imageStyle={{
						width: 80,
						height: 62,
						resizeMode: "contain",
						marginLeft: 20,
					}}
					onPress={() => navigation.navigate('Workout')}
				/>
				<GoalButton
					text={"Water"}
					imageSrc={require("../assets/images/water.png")}
					onPress={() => navigation.navigate('Water')}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	titleText: {
		width: "85%",
		textAlign: "left",
		fontSize: 24,
		fontFamily: "Red Rose",
		color: "#ed4949",
		marginBottom: 15,
	},
	goalButtonsContainer: {
		width: "85%",
		flexDirection: "row",
		marginBottom: 30,
	},
});

export default DailyGoals;
