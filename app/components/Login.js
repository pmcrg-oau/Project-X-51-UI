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

const Login = ({ setActiveTab }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm();

	return (
		<View style={styles.loginForm}>
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
				name="password"
				render={({ field: { onChange, value } }) => (
					<TextInput
						style={styles.textInput}
						placeholder="Enter password"
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
				text={"Log In"}
				onPress={() => null}
				buttonStyle={styles.buttonStyle}
				textStyle={styles.buttonTextStyle}
			/>
			<Text style={styles.bottomText}>
                Forgot Password? 
                <Text style={styles.action} onPress={() => setActiveTab('login')}>  Click here</Text>
            </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	loginForm: {
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
    bottomText: {
        color: '#C4C9C9',
        fontSize: 14,
        marginTop: 8,
        fontStyle: 'italic',
    },
    action: {
        color: '#ed4949',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 16
    }
});

export default Login;
