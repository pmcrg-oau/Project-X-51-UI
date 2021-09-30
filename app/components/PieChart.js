import React from "react";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const CustomPieChart = () => {
	return (
		<>
			<PieChart
				data={[
					{
						name: "Calories",
						percentage: 55,
						color: "rgba(0, 0, 0, .4)",
						legendFontColor: "#7F7F7F",
						legendFontSize: 12,
					},
					{
						name: "Fats",
						percentage: 25,
						color: "#800080",
						legendFontColor: "#7F7F7F",
						legendFontSize: 12,
					},
					{
						name: "Carbs",
						percentage: 15,
						color: "#008080",
						legendFontColor: "#7F7F7F",
						legendFontSize: 12,
					},
					{
						name: "Proteins",
						percentage: 5,
						color: "#ffe4cd",
						legendFontColor: "#7F7F7F",
						legendFontSize: 12,
					},
				]}
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
                    alignItems: 'center',
                    justifyContent: 'center',
				}}
				accessor="percentage"
				backgroundColor="transparent"
				absolute //for the absolute number remove if you want percentage
			/>
		</>
	);
};

export default CustomPieChart;
