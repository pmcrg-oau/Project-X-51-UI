import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomPieChart from "./PieChart";

const ProgressChartWeeks = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.typeContainer}>Progress Last Weeks</Text>
			<View style={styles.progressChartContainer}>
				<CustomPieChart />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 21,
        width: '85%',
    },
	typeContainer: {
        fontSize: 24,
		color: "#ed4949",
		fontFamily: "Red Rose",
        width: '100%',
        textAlign: 'left',
    },
    progressChartContainer: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProgressChartWeeks;
