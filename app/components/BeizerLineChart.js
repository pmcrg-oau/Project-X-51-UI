// import React in our code
import React from "react";

// import all the components we are going to use
import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	Dimensions,
	ScrollView,
} from "react-native";

//import React Native chart Kit for different kind of Chart
import { LineChart } from "react-native-chart-kit";

const BezierLineChart = ({ data, headerText }) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.textStyles, styles.previous]}>Previous Months</Text>
			<Text style={[styles.textStyles, styles.mainHeader]}>{headerText}</Text>
			<LineChart
				data={data}
				width={Dimensions.get("window").width - 32} // from react-native
				height={318}
				chartConfig={{
					backgroundColor: "#fff",
					backgroundGradientFrom: "#fff",
					backgroundGradientTo: "#fff",
					decimalPlaces: 2, // optional, defaults to 2dp
					color: (opacity = 255) => `#ed4949`,
					style: {
						borderRadius: 16,
					},
					propsForBackgroundLines: {
						strokeDasharray: "0",
					},
				}}
				withHorizontalLines={false}
				withVerticalLines={true}
				bezier
				style={{
					marginVertical: 16,
					paddingBottom: -30,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 16,
		borderColor: "#ed4949",
		borderWidth: 2,
		paddingTop: 32,
		marginVertical: 16,
	},
	textStyles: {
		textAlign: "left",
		width: "100%",
		paddingLeft: 16,
	},
	previous: {
		fontSize: 13,
		fontWeight: "bold",
		color: "rgba(237, 73, 73, 0.75)",
	},
	mainHeader: {
		fontSize: 36,
		fontWeight: "bold",
		color: "#ed4949",
	},
});

export default BezierLineChart;
