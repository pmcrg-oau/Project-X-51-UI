import React, { useContext } from "react";
import {
	View,
	Text,
	Image,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CustomButton from "../components/Button";
import TodayMealsContext from "../contexts/TodayMealsContext";

const TodayMeals = ({ navigation }) => {
	const { todayMealsData, selectedBreakfast, selectedLunch, selectedDinner } = useContext(TodayMealsContext);

	return (
		<View style={styles.todayMealsContainer}>
			<View style={styles.todayMealsTop}>
				<Text style={styles.todayMealsTopTitle}>Today's Meal</Text>
				<CustomButton text={"Track Meal"} textStyle={styles.trackMeal} />
			</View>
			<FlatList
				data={todayMealsData}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('Menu', {menuType: item.type})}>
						<View style={styles.buttonStyle}>
							<View style={styles.imageContainer}>
								<Image
									style={styles.imageStyle}
                                    // Determine to show latest meal imgSrc
									source={
										item.type === "Breakfast"
											? selectedBreakfast.imgSrc
											: item.type === "Lunch"
											? selectedLunch.imgSrc
											: item.type === "Dinner" && selectedDinner.imgSrc
									}
								/>
								<Text style={styles.imageText}>
                                    {/* Determine to show latest meal text and calorie */}
									{item.type === "Breakfast"
										? selectedBreakfast.name
										: item.type === "Lunch"
										? selectedLunch.name
										: item.type === "Dinner" && selectedDinner.name}{" "}
									(
									{item.type === "Breakfast"
										? selectedBreakfast.calAmount
										: item.type === "Lunch"
										? selectedLunch.calAmount
										: item.type === "Dinner" && selectedDinner.calAmount}
									)
								</Text>
							</View>
							<Text style={styles.textStyle}>
								{item.type}
								<AntDesign
									style={styles.iconStyle}
									name={"edit"}
									size={15}
									color={"#ED4949"}
								/>
							</Text>
						</View>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.type}
				horizontal={true}
				initialNumToRender={3}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	todayMealsContainer: {
		width: "85%",
		marginTop: 30,
	},
	todayMealsTop: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	todayMealsTopTitle: {
		fontSize: 24,
		color: "#ed4949",
		fontWeight: "bold",
		fontFamily: "Red Rose",
	},
	trackMeal: {
		fontSize: 12,
		fontWeight: "bold",
		color: "#c4c4c4",
		fontFamily: "Red Rose",
	},
	buttonStyle: {
		width: 133,
		minHeight: 112,
		borderColor: "#ed4949",
		borderWidth: 2,
		borderRadius: 10,
		justifyContent: "center",
		overflow: "hidden",
		marginRight: 12,
	},
	imageContainer: {
		width: "100%",
		backgroundColor: "rgba(237, 73, 73, 0.5)",
		height: 120,
		paddingVertical: 4,
	},
	imageStyle: {
		width: "100%",
		height: 82,
		resizeMode: "stretch",
	},
	imageText: {
		fontSize: 10,
		color: "#fff",
		fontWeight: "bold",
		marginVertical: 8,
		width: "100%",
		textAlign: "center",
	},
	textStyle: {
		fontSize: 12,
		color: "#ed4949",
		fontWeight: "bold",
		marginVertical: 5,
		width: "100%",
		textAlign: "center",
	},
	iconStyle: {
		marginLeft: 8,
	},
});

export default TodayMeals;
