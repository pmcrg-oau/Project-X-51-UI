import React from "react";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const CustomPieChart = ({ data }) => {
	return (
		<>
			<PieChart
				data={data}
				width={Dimensions.get("window").width - 16}
				height={220}
				chartConfig={{
					backgroundColor: "#1cc910",
					backgroundGradientFrom: "#eff3ff",
					backgroundGradientTo: "#efefef",
					decimalPlaces: 2,
					color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
				}}
				style={{
					paddingLeft: 16,
					borderRadius: 16,
					borderRadius: 16,
					borderWidth: 2,
					borderRadius: 20,
					borderColor: "#ed4949",
					height: 280,
					alignItems: "center",
					justifyContent: "center",
				}}
				accessor="percentage"
				backgroundColor="transparent"
			/>
		</>
	);
};

export default CustomPieChart;
