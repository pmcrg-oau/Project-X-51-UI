import React, { useEffect } from "react";
import { Font } from "expo";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Banner from "./app/components/Banner";
import LoginSignup from "./app/screens/LoginSignup";
import BMICalculator from "./app/screens/BMICalculator";
import BMIResult from "./app/screens/BMIResult";
import BMIScreen from "./app/screens/BMIScreen";

export default function App() {
	// useEffect(() => {
	//   Font.loadAsync({
	//     "Red Rose": require("./app/assets/fonts/RedRose-VariableFont_wght.ttf"),
	//   });
	// }, []);

	return (
		<BMIScreen />
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		height: "100%",
// 		// fontFamily: "Red Rose",
// 	},
// 	scrollView: {
// 		flexGrow: 1,
// 		flexDirection: "column",
// 		alignItems: "center",
// 		paddingBottom: 20,
// 	},
// });
