import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

import CustomButton from '../components/Button';

const TopDietsSection = ({ data }) => {
	return (
		<View style={styles.topDietsContainer}>
			<View style={styles.topDietsTop}>
				<Text style={styles.topDietsTopTitle}>Top Diets</Text>
				<CustomButton text={"See All"} textStyle={styles.seeAll} />
			</View>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<Image style={styles.topDietsImage} source={item.imageSrc} />
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
	topDietsImage: {
		width: 70,
		height: 70,
		resizeMode: "contain",
		marginRight: 5,
	},
});

export default TopDietsSection;
