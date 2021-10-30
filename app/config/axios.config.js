import Axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import { baseUrl } from './config.json';

const axios = Axios.create({
	baseURL: baseUrl,
});

axios.interceptors.request.use(
	async (config) => {
		config.url = config.url?.replace(/[^\x20-\x7E]/g, '');
		const noToken = ['/api/v1/auth/login', '/api/v1/auth/start'];

		if (!noToken.some((u) => config.url?.includes(u))) {
			const loggedInUserString = await SecureStore.getItemAsync('loggedInUser');
			const loggedInUser = JSON.parse(loggedInUserString ) ?? {};
			const token = loggedInUser.token ?? '';
			config.headers['Authorization'] = `Bearer ${token}`;
		}

		config.headers['Content-Type'] = 'application/json';

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(undefined, async (err) => {
	if (
		err.response.status === 401 ||
		err.response.data.message === '401 Unauthorized'
	) {
		await SecureStore.setItemAsync('loggedInUser', JSON.stringify({}));
		// forceUpdate();
	}
	return Promise.reject(err);
});

export default axios;
