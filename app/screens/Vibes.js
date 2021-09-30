import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	FlatList,
	Image,
	Button,
	Platform,
} from "react-native";
// import Button from "../components/Button";

const Vibes = () => {
	return (
		<View style={styles.container}>
			<ScrollView 
				contentContainerStyle={styles.scrollView}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<Text>This is the vibes page</Text>
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
	dashboardContainer: {
		alignItems: "center",
		backgroundColor: "rgba(237, 73, 73, 0.07)",
		borderRadius: 10,
		width: "90%",
		minHeight: 466,
		marginVertical: 0,
		paddingVertical: 20,
	},
	bannerContainer: {
		backgroundColor: "#ed4949",
		width: "100%",
		height: 219,
		borderRadius: 10,
		overflow: "hidden",
		marginTop: -10,
		paddingHorizontal: 16,
		paddingVertical: 34,
	},
	bannerText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "normal",
		fontFamily: "Red Rose",
	},
	bold: {
		fontWeight: "bold",
		marginBottom: 10,
	},
	titleText: {
		width: "85%",
		textAlign: "left",
		fontSize: 24,
		fontFamily: 'Red Rose',
		color: "#ed4949",
		fontWeight: "bold",
		marginBottom: 15,
	},
	goalButtonsContainer: {
		width: "85%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 30,
	},
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
		fontFamily: 'Red Rose',
		marginBottom: 5,
	},
	intakeResult: {
		fontWeight: "bold",
		color: "#fff",
		fontSize: 36,
		fontFamily: 'Red Rose',
		marginBottom: 15,
	},
	nutritionBreakText: {
		color: "#c4c4c4",
		fontWeight: "bold",
		fontSize: 12,
		fontFamily: 'Red Rose',
	},
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
		fontFamily: 'Red Rose',
		color: "#ed4949",
		fontWeight: "bold",
	},
	seeAll: {
		fontSize: 12,
		fontFamily: 'Red Rose',
		fontWeight: "bold",
		color: "#c4c4c4",
	},
	topDietsImage: {
		width: 93,
		height: 57,
		resizeMode: "cover",
		marginRight: 5,
	},
});

export default Vibes;
