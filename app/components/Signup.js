import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Spinner from 'react-native-loading-spinner-overlay';
import useAxios from 'axios-hooks';
import * as SecureStore from 'expo-secure-store';

import Button from './Button';

const Signup = ({ setActiveTab, setLoggedInUser }) => {
	const {
		control,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	const [{ loading }, handleSignup] = useAxios(
		{
			url: '/api/v1/auth/start',
			method: 'post',
		},
		{ manual: true }
	);

	const onSubmit = async (data) => {
		try {
			const response = await handleSignup({ data });
			const user = response.data;
			await SecureStore.setItemAsync('loggedInUser', JSON.stringify(user));
			setLoggedInUser(user);
		} catch (error) {
			const message = error?.response?.data?.message;
			switch (true) {
				case message.includes('username'):
					setError('username', {
						type: 'manual',
						message,
					});
					break;
				case message.includes('email'):
					setError('email', {
						type: 'manual',
						message,
					});
					break;
				case message.includes('password'):
					setError('password', {
						type: 'manual',
						message,
					});
					break;
				default:
					setError('password', {
						type: 'manual',
						message,
					});
					break;
			}
		}
	};

	return (
		<View style={styles.signupForm}>
			<Spinner
				visible={loading}
				textContent={'Loading...'}
				overlayColor={'rgba(0, 0, 0, 0.25)'}
				textStyle={styles.spinnerTextStyle}
			/>

			<Controller
				control={control}
				name='username'
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						style={[styles.textInput, errors.username && styles.textInputError]}
						placeholder='Enter name or username'
						value={value}
						onBlur={onBlur}
						onChangeText={(value) => onChange(value)}
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
				name='username'
				render={({ message }) => (
					<Text style={styles.errorMessage}>{message}</Text>
				)}
			/>

			<Controller
				control={control}
				name='email'
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						style={[styles.textInput, errors.email && styles.textInputError]}
						placeholder='Enter a valid email address'
						value={value}
						onBlur={onBlur}
						onChangeText={(value) => onChange(value)}
					/>
				)}
				rules={{
					required: {
						value: true,
						message: 'Field is required!',
					},
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: 'Please enter a valid E-mail Address',
					},
				}}
			/>

			<ErrorMessage
				errors={errors}
				name='email'
				render={({ message }) => (
					<Text style={styles.errorMessage}>{message}</Text>
				)}
			/>

			<Controller
				control={control}
				name='password'
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						style={[styles.textInput, errors.password && styles.textInputError]}
						placeholder='Enter a strong password'
						value={value}
						onBlur={onBlur}
						onChangeText={(value) => onChange(value)}
					/>
				)}
				rules={{
					required: {
						value: true,
						message: 'Field is required!',
					},
					pattern: {
						value:
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
						message:
							'Password should be at least 8 characters, 1 uppercase letter, 1 lowercase leter, 1 number & 1 Symbol',
					},
				}}
			/>

			<ErrorMessage
				errors={errors}
				name='password'
				render={({ message }) => (
					<Text style={styles.errorMessage}>{message}</Text>
				)}
			/>

			<Button
				text={'Create Account'}
				onPress={handleSubmit(onSubmit)}
				buttonStyle={styles.buttonStyle}
				textStyle={styles.buttonTextStyle}
			/>
			<Text style={styles.bottomText}>
				Already have an account?
				<Text style={styles.action} onPress={() => setActiveTab('login')}>
					{' '}
					Log In
				</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	signupForm: {
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
	bottomText: {
		color: '#C4C9C9',
		fontSize: 14,
		fontFamily: 'Red Rose',
		marginTop: 8,
		fontStyle: 'italic',
	},
	action: {
		color: '#ed4949',
		fontStyle: 'normal',
		fontSize: 16,
		fontFamily: 'Red Rose',
	},
});

export default Signup;
