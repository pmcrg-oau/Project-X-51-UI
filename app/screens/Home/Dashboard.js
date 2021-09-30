import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import DATA from "../../dummyData/topDietsData";
import TopDietsSection from "../../components/TopDietsSection";
import DailyIntakeContainer from "../../components/DailyIntakeContainer";
import DailyGoals from "../../components/DailyGoals";

const CustomCancelButton = ({ onPress }) => (
	<Pressable
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
	</Pressable>
);

const CustomConfirmButton = ({ onPress }) => (
	<Pressable
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
	</Pressable>
);

const Dashboard = ({ navigation }) => {
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
	};

	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<View style={styles.bannerContainer}>
					<Text style={[styles.bannerText]}>Hi Sharbie!</Text>
					<Text style={styles.bannerText}>
						Today is a beautiful day to lose weight!
					</Text>

					<View style={styles.calenderTextContainer}>
						<Pressable
							style={styles.calenderButton}
							onPress={() => setShow(true)}
						>
							<EvilIcons
								style={styles.iconStyle}
								name={"calendar"}
								size={25}
								color={"#fff"}
							/>
							<Text
								style={{
									color: "#fff",
									marginLeft: 5,
									fontFamily: "Red Rose",
									fontSize: 18,
								}}
							>
								Choose Date
							</Text>
						</Pressable>

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
					{/* Daily Goals */}
					<DailyGoals navigation={navigation} />

					{/* Daily Intake Container */}
					<DailyIntakeContainer />

					{/* Top Diets Section */}
					<TopDietsSection data={DATA} />
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
		fontFamily: "Red Rose",
		color: "#fff",
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
		marginBottom: 15,
	},
	goalButtonsContainer: {
		width: "85%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 30,
	},
});

export default Dashboard;
