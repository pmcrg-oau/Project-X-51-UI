import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

import CustomButton from "../components/Button";

const TopDietsSection = ({ data }) => {
	return (
		<View style={styles.topDietsContainer}>
			<View style={styles.topDietsTop}>
				<Text style={styles.topDietsTopTitle}>Top Diets</Text>
				<CustomButton text={"See All"} textStyle={styles.seeAll} />
			</View>
			<FlatList
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={({ item }) => (
					<View style={styles.topDiet}>
						<Image style={styles.topDietImage} source={item.imageSrc} />
						<Text style={styles.topDietText}>{item.title}</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
				horizontal={true}
				initialNumToRender={4}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	topDietsContainer: {
		width: "85%",
		marginTop: 30,
	},
	topDietsTop: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	topDietsTopTitle: {
		fontSize: 24,
		color: "#ed4949",
		fontWeight: "bold",
		fontFamily: "Red Rose",
	},
	seeAll: {
		fontSize: 12,
		fontWeight: "bold",
		color: "#c4c4c4",
		fontFamily: "Red Rose",
	},
	topDiet: {
		width: 90,
		height: "auto",
		marginRight: 16,
	},
	topDietImage: {
		width: 90,
		height: 90,
		resizeMode: "stretch",
		marginRight: 16,
	},
	topDietText: {
		fontSize: 11,
		fontFamily: 'Red Rose',
		fontWeight: "bold",
		color: "rgba(0, 0, 0, 0.5)",
		textAlign: "center",
	},
});

export default TopDietsSection;
