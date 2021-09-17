import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

import Button from "./Button";

const BMICalculatorForm = ({ gender, navigation }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm();

	return (
		<View style={styles.bmiCalculatorForm}>
			<Controller
				control={control}
				name="height"
				render={({ field: { onChange, value } }) => (
					<TextInput
						style={styles.textInput}
						placeholder="Input your height (in)"
						value={value}
						onChangeText={(value) => onChange(value)}
					/>
				)}
				rules={{
					required: {
						value: true,
						message: "Field is required!",
					},
				}}
			/>

			<Controller
				control={control}
				name="weight"
				render={({ field: { onChange, value } }) => (
					<TextInput
						style={styles.textInput}
						placeholder="Input your weight (kg)"
						value={value}
						onChangeText={(value) => onChange(value)}
					/>
				)}
				rules={{
					required: {
						value: true,
						message: "Field is required!",
					},
				}}
			/>

			<Controller
				control={control}
				name="age"
				render={({ field: { onChange, value } }) => (
					<TextInput
						style={styles.textInput}
						placeholder="Input your age"
						value={value}
						onChangeText={(value) => onChange(value)}
					/>
				)}
				rules={{
					required: {
						value: true,
						message: "Field is required!",
					},
				}}
			/>

			<Button
				text={"Calculate your BMI"}
				onPress={() => navigation.navigate('BMIResult')}
				buttonStyle={styles.buttonStyle}
				textStyle={styles.buttonTextStyle}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	bmiCalculatorForm: {
		width: "100%",
		alignItems: "center",
		maxWidth: 364,
		marginTop: 32,
	},
	textInput: {
		width: "100%",
		maxWidth: 205,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderBottomColor: "#CAC9C9",
		borderBottomWidth: 1,
		fontSize: 14,
		color: "#cac9c9",
		marginVertical: 16,
	},
	buttonStyle: {
		width: "100%",
		maxWidth: 216,
		paddingVertical: 8,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ed4949",
		borderRadius: 10,
		shadowColor: "rgba(0, 0, 0, 0.25)",
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: 1,
		shadowRadius: 4,
		elevation: 10,
		marginTop: 48,
	},
	buttonTextStyle: {
		fontSize: 14,
		color: "#fff",
	},
});

export default BMICalculatorForm;
