import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

import Button from "./Button";

const Signup = ({ setActiveTab, setLoggedIn }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm();

	return (
		<View style={styles.signupForm}>
			<Controller
				control={control}
				name="username"
				render={({ field: { onChange, value } }) => (
					<TextInput
						style={styles.textInput}
						placeholder="Enter name or username"
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
				name="email"
				render={({ field: { onChange, value } }) => (
					<TextInput
						style={styles.textInput}
						placeholder="Enter a valid email address"
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
				name="password"
				render={({ field: { onChange, value } }) => (
					<TextInput
						style={styles.textInput}
						placeholder="Enter a strong password"
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
				text={"Create Account"}
				onPress={() => setLoggedIn(true)}
				buttonStyle={styles.buttonStyle}
				textStyle={styles.buttonTextStyle}
			/>
            <Text style={styles.bottomText}>
                Already have an account?
                <Text style={styles.action} onPress={() => setActiveTab('login')}> Log In</Text>
            </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	signupForm: {
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
		fontFamily: 'Red Rose',
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
		fontFamily: 'Red Rose',
		color: "#fff",
	},
    bottomText: {
        color: '#C4C9C9',
        fontSize: 14,
		fontFamily: 'Red Rose',
        marginTop: 8,
        fontStyle: 'italic'
    },
    action: {
        color: '#ed4949',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
		fontFamily: 'Red Rose',
    }
});

export default Signup;
