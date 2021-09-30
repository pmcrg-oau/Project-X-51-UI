import React from "react";
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	ScrollView,
} from "react-native";

import TodayMeals from "../../components/TodayMeals";

const MealPlan = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../../assets/images/meal-bg.png")}
				style={styles.background}
				imageStyle={styles.backgroundImage}
			>
				<ScrollView
					contentContainerStyle={styles.scrollView}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<Text style={[styles.text, styles.dashboardText]}>Dashboard</Text>
					<Text style={[styles.text, styles.mealPlanText]}>Meal Plan</Text>

					<Text style={[styles.text, styles.welcomeBackText]}>
						Welcome back,
					</Text>
					<Text style={[styles.text, styles.usernameText]}>Webdot__</Text>

					<TodayMeals navigation={navigation} />
				</ScrollView>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 1,
	},
	backgroundImage: {
		width: "100%",
		height: 402,
		backgroundColor: "transparent",
		padding: 20,
		paddingVertical: 40,
		position: "absolute",
		top: 0,
		left: 930,
	},
	scrollView: {
		flexGrow: 1,
		alignItems: "center",
		paddingBottom: 20,
	},
	text: {
		fontWeight: "bold",
		width: "85%",
		textAlign: "left",
		color: "#ed4949",
	},
	dashboardText: {
		fontSize: 30,
        fontFamily: 'Red Rose',
		marginVertical: 8,
	},
	mealPlanText: {
		fontSize: 18,
        fontFamily: 'Red Rose',
		opacity: 0.6,
		marginBottom: 20,
	},
	welcomeBackText: {
		fontSize: 14,
        fontFamily: 'Red Rose',
		marginBottom: 8,
	},
	usernameText: {
		fontSize: 24,
        fontFamily: 'Red Rose',
	},
});

export default MealPlan;
