import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	FlatList,
	Image,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import CustomButton from "../components/Button";
import GoalButton from "../components/GoalButton";
import DATA from "../dummyData/topDietsData";

const CustomCancelButton = ({ onPress }) => (
	<TouchableHighlight
		style={{
			width: "100%",
			height: 50,
			backgroundColor: "#fff",
			borderRadius: 10,
			marginVertical: 3,
			alignItems: "center",
			justifyContent: "center",
		}}
		onPress={onPress}
		activeOpacity={0.6}
		underlayColor="#c4c4c4"
	>
		<Text style={{ color: "#ed4949", fontSize: 18, fontWeight: "bold" }}>
			Cancel
		</Text>
	</TouchableHighlight>
);

const CustomConfirmButton = ({ onPress }) => (
	<TouchableHighlight
		style={{
			width: "100%",
			height: 50,
			backgroundColor: "#fff",
			borderRadius: 10,
			alignItems: "center",
			justifyContent: "center",
			borderTopColor: "#c4c4c4",
			borderTopWidth: 0.5,
		}}
		onPress={onPress}
		activeOpacity={0.6}
		underlayColor="#c4c4c4"
	>
		<Text style={{ color: "#ed4949", fontSize: 18, fontWeight: "bold" }}>
			Confirm
		</Text>
	</TouchableHighlight>
);

const Dashboard = () => {
	const now = new Date().getTime();
	const [date, setDate] = useState(new Date(now));
	const [show, setShow] = useState(false);
	const dateArray = date.toString().split(" ");

	const onChange = (selectedDate) => {
		const currentDate = selectedDate || date;
		setDate(currentDate);
		hideDatePicker();
	};

	const hideDatePicker = () => {
		setShow(false);
	}

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<View style={styles.bannerContainer}>
					<Text style={[styles.bannerText, styles.bold]}>Hi Sharbie!</Text>
					<Text style={styles.bannerText}>
						Today is a beautiful day to lose weight!
					</Text>

					<View style={styles.calenderTextContainer}>
						<TouchableOpacity
							style={styles.calenderButton}
							onPress={() => setShow(true)}
						>
							<EvilIcons
								style={styles.iconStyle}
								name={"calendar"}
								size={25}
								color={"#fff"}
							/>
							<Text style={{ color: "#fff", marginLeft: 5 }}>Choose Date</Text>
						</TouchableOpacity>

						<View>
							<Text style={[styles.calenderText]}>{dateArray[0]}</Text>
							<Text style={[styles.calenderText, styles.textSmall]}>
								{dateArray[1]} {dateArray[2]} {dateArray[3]}
							</Text>
						</View>
					</View>

					<DateTimePickerModal
						date={date}
						isVisible={show}
						mode="date"
						onConfirm={onChange}
						onCancel={hideDatePicker}
						customCancelButtonIOS={() => (
							<CustomCancelButton onPress={hideDatePicker} />
						)}
						customConfirmButtonIOS={({ onPress }) => (
							<CustomConfirmButton onPress={onPress} />
						)}
					/>
				</View>

				<View style={styles.dashboardContainer}>
					<Text style={styles.titleText}>Daily Goals</Text>
					<View style={styles.goalButtonsContainer}>
						<GoalButton
							text={"Meal Plan"}
							imageSrc={require("../assets/images/plate.png")}
						/>
						<GoalButton
							text={"Workout"}
							imageSrc={require("../assets/images/workout.png")}
							imageStyle={{
								width: 80,
								height: 62,
								resizeMode: "contain",
								marginLeft: 20,
							}}
						/>
						<GoalButton
							text={"Water"}
							imageSrc={require("../assets/images/water.png")}
						/>
					</View>
					<View style={styles.dailyIntakeContainer}>
						<Text style={styles.dailyIntakeText}>Daily intake</Text>
						<Text style={styles.intakeResult}>4600KCal</Text>
						<Text style={styles.nutritionBreakText}>
							Carbs(50%) Protein(30%) Fat(20%)
						</Text>
					</View>
					<View style={styles.topDietsContainer}>
						<View style={styles.topDietsTop}>
							<Text style={styles.topDietsTopTitle}>Top Diets</Text>
							<CustomButton text={"See All"} textStyle={styles.seeAll} />
						</View>
						<FlatList
							data={DATA}
							renderItem={({ item }) => (
								<Image style={styles.topDietsImage} source={item.imageSrc} />
							)}
							keyExtractor={(item) => item.id}
							horizontal={true}
							initialNumToRender={4}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		height: "100%",
		fontFamily: "Red Rose",
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
		minHeight: 219,
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
	calenderTextContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 30,
	},
	calenderButton: {
		flexDirection: "row",
		alignItems: "center",
	},
	calenderText: {
		width: "100%",
		textAlign: "right",
		fontSize: 36,
		color: "#fff",
		fontWeight: "bold",
	},
	textSmall: {
		fontSize: 16,
		opacity: 0.6,
		marginTop: 10,
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
		fontFamily: "Red Rose",
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
		marginBottom: 5,
		fontFamily: "Red Rose",
	},
	intakeResult: {
		fontWeight: "bold",
		color: "#fff",
		fontSize: 36,
		marginBottom: 15,
		fontFamily: "Red Rose",
	},
	nutritionBreakText: {
		color: "#c4c4c4",
		fontWeight: "bold",
		fontSize: 12,
		fontFamily: "Red Rose",
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

export default Dashboard;
