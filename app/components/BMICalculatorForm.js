import React, { useContext } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import useAxios from 'axios-hooks';
import Spinner from 'react-native-loading-spinner-overlay';
import * as SecureStore from 'expo-secure-store';

import { LoginContext } from '../contexts/LoginContext';
import Button from './Button';

const BMICalculatorForm = ({ gender, navigation }) => {
	const { loggedInUser, setLoggedInUser } = useContext(LoginContext);

	const {
		control,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	const [{ loading }, calculateBMI] = useAxios(
		{
			url: '/api/v1/history',
			method: 'post',
		},
		{ manual: true }
	);

	const onSubmit = async (data) => {
		try {
			const response = await calculateBMI({
				data: {
					gender,
					age: +data.age,
					height: +data.height,
					weight: +data.weight,
				},
			});
			const user = {
				...loggedInUser,
				history: {
					...response.data,
				},
			};
			await SecureStore.setItemAsync('loggedInUser', JSON.stringify(user));
			setLoggedInUser(user);
			navigation.navigate('BMIResult', {
				bmi: response.data.bmi,
				category: response.data.category,
			});
		} catch (error) {
			const message = error.response.data.message;
			setError('age', {
				type: 'manual',
				message,
			});
		}
	};

	return (
		<View style={styles.bmiCalculatorForm}>
			<Spinner
				visible={loading}
				textContent={'Loading...'}
				overlayColor={'rgba(0, 0, 0, 0.25)'}
				textStyle={styles.spinnerTextStyle}
			/>

			<Controller
				control={control}
				name='height'
				render={({ field: { onChange, value } }) => (
					<TextInput
						style={[styles.textInput, errors.height && styles.textInputError]}
						placeholder='Input your height (m)'
						value={value}
						onChangeText={(value) => onChange(value)}
						keyboardType='numeric'
					/>
				)}
				rules={{
					required: {
						value: true,
						message: 'Field is required!',
					},
				}}
			/>

			<ErrorMessage
				errors={errors}
				name='height'
				render={({ message }) => (
					<Text style={styles.errorMessage}>{message}</Text>
				)}
			/>

			<Controller
				control={control}
				name='weight'
				render={({ field: { onChange, value } }) => (
					<TextInput
						style={[styles.textInput, errors.weight && styles.textInputError]}
						placeholder='Input your weight (kg)'
						value={value}
						onChangeText={(value) => onChange(value)}
						keyboardType='numeric'
					/>
				)}
				rules={{
					required: {
						value: true,
						message: 'Field is required!',
					},
				}}
			/>

			<ErrorMessage
				errors={errors}
				name='weight'
				render={({ message }) => (
					<Text style={styles.errorMessage}>{message}</Text>
				)}
			/>

			<Controller
				control={control}
				name='age'
				render={({ field: { onChange, value } }) => (
					<TextInput
						style={[styles.textInput, errors.age && styles.textInputError]}
						placeholder='Input your age'
						value={value}
						onChangeText={(value) => onChange(value)}
						keyboardType='numeric'
					/>
				)}
				rules={{
					required: {
						value: true,
						message: 'Field is required!',
					},
				}}
			/>

			<ErrorMessage
				errors={errors}
				name='age'
				render={({ message }) => (
					<Text style={styles.errorMessage}>{message}</Text>
				)}
			/>

			<Button
				text={'Calculate your BMI'}
				onPress={handleSubmit(onSubmit)}
				buttonStyle={styles.buttonStyle}
				textStyle={styles.buttonTextStyle}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	bmiCalculatorForm: {
		width: '97%',
		alignItems: 'center',
		minWidth: 364,
		marginTop: 32,
	},
	spinnerTextStyle: {
		color: '#fff',
	},
	textInput: {
		width: '80%',
		minWidth: 260,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderBottomColor: '#CAC9C9',
		borderBottomWidth: 1,
		fontSize: 14,
		fontFamily: 'Red Rose',
		color: '#cac9c9',
		marginVertical: 16,
	},
	textInputError: {
		borderBottomColor: '#ed4949',
	},
	errorMessage: {
		color: '#ed4949',
		fontSize: 12,
		width: '80%',
		minWidth: 260,
		alignItems: 'center',
	},
	buttonStyle: {
		width: '100%',
		maxWidth: 216,
		paddingVertical: 8,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ed4949',
		borderRadius: 10,
		shadowColor: 'rgba(0, 0, 0, 0.25)',
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: 1,
		shadowRadius: 4,
		elevation: 10,
		marginTop: 48,
	},
	buttonTextStyle: {
		fontSize: 14,
		fontFamily: 'Red Rose',
		color: '#fff',
	},
});

export default BMICalculatorForm;
