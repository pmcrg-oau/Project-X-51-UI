import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './app/screens/SplashScreen';
import LoginContextProvider from './app/contexts/LoginContext';
import AppContent from './AppContent';

export default function App() {
	const [showSplashScreen, setShowSplashScreen] = useState(true);

	let [fontsLoaded] = useFonts({
		'Red Rose': require('./app/assets/fonts/RedRose-VariableFont_wght.ttf'),
		Rockwell: require('./app/assets/fonts/rockb.ttf'),
	});

	useEffect(() => {
		if (fontsLoaded) {
			setTimeout(() => {
				setShowSplashScreen(false);
			}, 2000);
		}
	}, [fontsLoaded]);

	if (showSplashScreen) {
		return <SplashScreen />;
	} else {
		return (
			<NavigationContainer>
				<LoginContextProvider>
					<AppContent />
				</LoginContextProvider>
			</NavigationContainer>
		);
	}
}
