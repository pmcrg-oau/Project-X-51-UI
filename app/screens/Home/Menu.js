import React, { useContext, useState } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Dimensions,
} from "react-native";

import TodayMealsContext from "../../contexts/TodayMealsContext";

const Menu = ({ route, navigation }) => {
	const [searchText, setSearchText] = useState("");
	const { menuType } = route.params;
	const {
		todayMealsData,
		setSelectedBreakfast,
		setSelectedLunch,
		setSelectedDinner,
	} = useContext(TodayMealsContext);

	// select meals menu based on menu type
	const menuData = todayMealsData.filter((data) => data.type === menuType)[0];
	// filter the menu meals with search Text
	const filteredMenuDataMeals = menuData.meals.filter((data) =>
		data.name.toLowerCase().includes(searchText.toLowerCase())
	);
	let setSelectedMeal;
	switch (menuType) {
		case "Breakfast":
			setSelectedMeal = setSelectedBreakfast;
			break;
		case "Lunch":
			setSelectedMeal = setSelectedLunch;
			break;
		case "Dinner":
			setSelectedMeal = setSelectedDinner;
			break;
		default:
			break;
	}

	const windowWidth = Dimensions.get("window").width;

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text style={[styles.text, styles.topText]}>
					{menuType} Menu For You
				</Text>
			</View>
			<Text style={[styles.text, styles.sloganText]}>
				A reduced calorie {menuType} plan with maximized nutrition
			</Text>
			<View style={styles.menuList}>
				<FlatList
					data={filteredMenuDataMeals}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.buttonContainerStyle}
							onPress={() => {
								setSelectedMeal(item);
								navigation.goBack();
							}}
						>
							<View style={styles.buttonStyle}>
								<View style={styles.imageContainer}>
									<Image style={styles.imageStyle} source={item.imgSrc} />
								</View>
								<Text style={styles.textStyle}>
									{item.name} ({item.calAmount})
								</Text>
							</View>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.name}
					initialNumToRender={8}
					numColumns={Math.floor((windowWidth - 32) / 133)}
					key={Math.floor((windowWidth - 32) / 133)}
				/>
			</View>
			<Text style={[styles.text, styles.notInterestedText]}>
				Not interested in any? Click here
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		height: "100%",
		alignItems: "center",
	},
	scrollView: {
		flexGrow: 1,
		flexDirection: "column",
		alignItems: "center",
		paddingBottom: 20,
	},
	top: {
		width: "90%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	text: {
		color: "#ed4949",
		fontWeight: "bold",
		width: "85%",
		textAlign: "left",
        fontFamily: 'Red Rose',
	},
	topText: {
		fontSize: 30,
        fontFamily: 'Red Rose',
	},
	sloganText: {
		fontSize: 11,
        fontFamily: 'Red Rose',
		opacity: 0.75,
		marginVertical: 16,
	},
	notInterestedText: {
		width: "85%",
		fontSize: 14,
        fontFamily: 'Red Rose',
		opacity: 0.89,
		marginVertical: 8,
		textAlign: "right",
	},
	menuList: {
		width: "85%",
		height: 550,
	},
	buttonContainerStyle: {
		width: "50%",
		alignItems: "center",
		marginBottom: 16,
	},
	buttonStyle: {
		width: 133,
		height: 142,
		borderColor: "#ed4949",
		borderWidth: 2,
		borderRadius: 10,
		justifyContent: "center",
		overflow: "hidden",
		backgroundColor: "#ed4949",
	},
	imageContainer: {
		width: "100%",
		backgroundColor: "rgba(237, 73, 73, 0.5)",
		height: 80,
		paddingVertical: 4,
	},
	imageStyle: {
		width: "100%",
		height: 82,
		resizeMode: "stretch",
	},
	textStyle: {
		fontSize: 12,
        fontFamily: 'Red Rose',
		color: "#fff",
		fontWeight: "bold",
		marginVertical: 8,
		width: "100%",
		textAlign: "center",
	},
});

export default Menu;
