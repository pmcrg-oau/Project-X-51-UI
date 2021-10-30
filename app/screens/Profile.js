import React, { useContext, useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	FlatList,
	Pressable,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import useAxios from 'axios-hooks';

import BezierLineChart from '../components/BeizerLineChart';
import { LoginContext } from '../contexts/LoginContext';
import profileData from '../dummyData/profileData';

const Profile = () => {
	const { loggedInUser } = useContext(LoginContext);
	const [paramIndex, setParamIndex] = useState(0);
	const [titleText, setTitleText] = useState('Your Current Weight');
	const param = profileData[paramIndex];

	const config = {
		velocityThreshold: 0.3,
		directionalOffsetThreshold: 80,
	};

	const onSwipeLeft = () => {
		setParamIndex((paramIndex) =>
			paramIndex === profileData.length - 1 ? 0 : paramIndex + 1
		);
	};

	const onSwipeRight = () => {
		setParamIndex((paramIndex) =>
			paramIndex === 0 ? profileData.length - 1 : paramIndex - 1
		);
	};

	const [{ loading }, getUserHistory] = useAxios(
		{
			url: '/api/v1/history',
			method: 'get',
		},
		{ manual: true }
	);

	useEffect(() => {
		const fetchUserHistory = async () => {
			try {
				const response = await getUserHistory();
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		};

		fetchUserHistory();
	}, []);

	useEffect(() => {
		switch (paramIndex) {
			case 0:
				setTitleText('Your Current Weight');
				break;
			case 1:
				setTitleText('Your Current  BMI');
				break;
			case 2:
				setTitleText('Calories left to burn');
				break;
			default:
				break;
		}
	}, [paramIndex]);

	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<View style={bannerStyles.container}>
					<View style={bannerStyles.logoContainer}>
						<Image
							style={bannerStyles.image}
							fadeDuration={0}
							resizeMode={'cover'}
							source={require('../assets/images/profile.png')}
						/>
						<Text style={bannerStyles.text}>{loggedInUser.username}</Text>
					</View>

					<GestureRecognizer
						onSwipeLeft={(state) => onSwipeLeft(state)}
						onSwipeRight={(state) => onSwipeRight(state)}
						config={config}
						style={bannerStyles.paramPreview}
					>
						<Text style={[bannerStyles.text, bannerStyles.titleText]}>
							{titleText}
						</Text>
						<Text style={bannerStyles.currentDataText}>
							{param.currentData}
						</Text>
					</GestureRecognizer>

					<View style={bannerStyles.barIndicator}>
						<FlatList
							data={profileData}
							showsVerticalScrollIndicator={false}
							showsHorizontalScrollIndicator={false}
							renderItem={(item) => (
								<Pressable onPress={() => setParamIndex(item.index)}>
									<View
										style={[
											bannerStyles.bar,
											item.index === paramIndex && bannerStyles.activeBar,
										]}
									/>
								</Pressable>
							)}
							keyExtractor={(item) => item.id.toString()}
							horizontal={true}
							initialNumToRender={3}
						/>
					</View>
				</View>

				<BezierLineChart data={param.graphData} headerText={param.graphLabel} />
			</ScrollView>
		</View>
	);
};

const bannerStyles = StyleSheet.create({
	container: {
		backgroundColor: '#ed4949',
		width: '100%',
		minHeight: 350,
		borderRadius: 10,
		overflow: 'hidden',
		alignItems: 'center',
		marginTop: -10,
		paddingVertical: 25,
	},
	logoContainer: {
		width: '100%',
		maxWidth: 145,
		height: 'auto',
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	text: {
		color: '#fff',
		fontSize: 12,
		fontFamily: 'Red Rose',
	},
	image: {
		resizeMode: 'cover',
		width: 145,
		height: 145,
		borderRadius: 145 / 2,
	},
	paramPreview: {
		backgroundColor: '#fff',
		width: '85%',
		minHeight: 110,
		minWidth: 272,
		maxWidth: 400,
		alignItems: 'center',
		borderRadius: 20,
		paddingVertical: 12,
		marginVertical: 25,
	},
	titleText: {
		color: 'rgba(237, 73, 73, 0.75)',
		marginBottom: 16,
		fontFamily: 'Rockwell',
	},
	currentDataText: {
		fontSize: 48,
		fontFamily: 'Rockwell',
		color: '#ed4949',
	},
	barIndicator: {
		width: '100%',
		marginTop: 10,
		alignItems: 'center',
	},
	bar: {
		backgroundColor: 'rgba(0, 0, 0, 0.25)',
		width: 36,
		height: 5,
		borderRadius: 10,
		marginRight: 20,
	},
	activeBar: {
		backgroundColor: '#fff',
	},
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		height: '100%',
	},
	scrollView: {
		flexGrow: 1,
		flexDirection: 'column',
		alignItems: 'center',
		paddingBottom: 20,
	},
});

export default Profile;
