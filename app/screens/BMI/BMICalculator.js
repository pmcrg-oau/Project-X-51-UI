import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import Banner from "../../components/Banner";
import BMICalculatorForm from "../../components/BMICalculatorForm";

const BMICalculator = ({ navigation }) => {
	const [gender, setGender] = useState("female");

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<Banner />

				<View style={styles.bmiContainer}>
					<View style={styles.tab}>
						<TouchableOpacity
							style={[
								styles.tabButtons,
								gender === "female" ? styles.activeTabButton : {},
							]}
							onPress={() => setGender("female")}
						>
							<Text
								style={[
									styles.femaleButton,
									gender === "female" ? styles.active : {},
								]}
							>
								Female
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								styles.tabButtons,
								gender === "male" ? styles.activeTabButton : {},
							]}
							onPress={() => setGender("male")}
						>
							<Text
								style={[
									styles.maleButton,
									gender === "male" ? styles.active : {},
								]}
							>
								Male
							</Text>
						</TouchableOpacity>
					</View>

					<BMICalculatorForm gender={gender} navigation={navigation}/>
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
	bmiContainer: {
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
	maleButton: {
		color: "#fff",
		fontSize: 14,
	},
	femaleButton: {
		color: "#fff",
		fontSize: 14,
	},
	activeTabButton: {
		backgroundColor: "#fff",
	},
	active: {
		color: "#ed4949",
	},
});

export default BMICalculator;
