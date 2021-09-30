import React, { useState } from "react";
import TodayMealsContext from "../contexts/TodayMealsContext";
import todayMealsData from "../dummyData/todayMealsData";

const TodayMealsContextProvider = ({ children }) => {
	const [selectedBreakfast, setSelectedBreakfast] = useState(
		todayMealsData[0].meals[0]
	);
	const [selectedLunch, setSelectedLunch] = useState(
		todayMealsData[1].meals[0]
	);
	const [selectedDinner, setSelectedDinner] = useState(
		todayMealsData[2].meals[0]
	);

	return (
		<TodayMealsContext.Provider
			value={{
				todayMealsData,
				selectedBreakfast,
				selectedLunch,
				selectedDinner,
				setSelectedBreakfast,
				setSelectedLunch,
				setSelectedDinner,
			}}
		>
			{children}
		</TodayMealsContext.Provider>
	);
};

export default TodayMealsContextProvider;
