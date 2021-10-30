import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import useAxios from 'axios-hooks';
import Spinner from 'react-native-loading-spinner-overlay';
import * as SecureStore from 'expo-secure-store';

import Button from './Button';

const Login = ({ setActiveTab, setLoggedInUser }) => {
	const {
		control,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	const [{ loading }, handleLogin] = useAxios(
		{
			url: '/api/v1/auth/login',
			method: 'post',
		},
		{ manual: true }
	);

	const onSubmit = async (data) => {
		try {
			const response = await handleLogin({ data });
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
		<View style={styles.loginForm}>
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
				name='password'
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						style={[styles.textInput, errors.password && styles.textInputError]}
						placeholder='Enter password'
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
				name='password'
				render={({ message }) => (
					<Text style={styles.errorMessage}>{message}</Text>
				)}
			/>

			<Button
				text={'Log In'}
				onPress={handleSubmit(onSubmit)}
				buttonStyle={styles.buttonStyle}
				textStyle={styles.buttonTextStyle}
			/>
			<Text style={styles.bottomText}>
				Forgot Password?
				<Text style={styles.action} onPress={() => setActiveTab('login')}>
					{' '}
					Click here
				</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	loginForm: {
		width: '97%',
		alignItems: 'center',
		minWidth: 364,
		marginTop: 32,
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
	spinnerTextStyle: {
		color: '#fff',
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
		fontWeight: 'bold',
		fontStyle: 'normal',
		fontSize: 16,
		fontFamily: 'Red Rose',
	},
});

export default Login;
