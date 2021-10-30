import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const LoginContext = createContext(null);

const LoginContextProvider = ({ children }) => {
	const [loggedInUser, setLoggedInUser] = useState({});

	const getLoggedInUser = async () => {
		const userString = await SecureStore.getItemAsync('loggedInUser');
		const user = JSON.parse(userString) ?? {};
		setLoggedInUser(user);
	};

	useEffect(() => {
		getLoggedInUser();
	}, []);

	return (
		<LoginContext.Provider value={{ loggedInUser, setLoggedInUser }}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginContextProvider;
