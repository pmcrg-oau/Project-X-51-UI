import React from 'react';
import { View, Image, Pressable, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

const CustomDrawerContainer = ({ setLoggedInUser, ...props }) => {
	const routeNames = props.state.routeNames;
	const routeIndex = props.state.index;

	const logout = async () => {
		await SecureStore.setItemAsync('loggedInUser', JSON.stringify({}));
		setLoggedInUser({});
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.container}>
				<DrawerContentScrollView {...props}>
					<Pressable
						style={styles.backButton}
						onPress={() => props.navigation.closeDrawer()}
					>
						<AntDesign
							style={styles.iconStyle}
							name={'left'}
							size={35}
							color={'#ED4949'}
						/>
					</Pressable>

					<View style={styles.logoContainer}>
						<Pressable
							onPress={() => {
								props.navigation.navigate('Profile');
							}}
						>
							<Image
								style={styles.image}
								fadeDuration={0}
								resizeMode={'cover'}
								source={require('../assets/images/profile.png')}
							/>
						</Pressable>
					</View>

					<Pressable
						style={[
							styles.navContainer,
							routeNames[routeIndex] === 'Home' && styles.navContainerActive,
						]}
						onPress={() => {
							props.navigation.navigate('Home');
						}}
					>
						<AntDesign
							style={styles.iconStyle}
							name={'home'}
							size={25}
							color={routeNames[routeIndex] === 'Home' ? '#ED4949' : 'black'}
						/>

						<Text
							style={[
								styles.drawerText,
								routeNames[routeIndex] === 'Home' && styles.drawerTextActive,
							]}
						>
							Home
						</Text>
					</Pressable>

					<Pressable
						style={[
							styles.navContainer,
							routeNames[routeIndex] === 'BMIScreen' &&
								styles.navContainerActive,
						]}
						onPress={() => {
							props.navigation.navigate('BMIScreen');
						}}
					>
						<AntDesign
							style={styles.iconStyle}
							name={'barschart'}
							size={25}
							color={
								routeNames[routeIndex] === 'BMIScreen' ? '#ED4949' : 'black'
							}
						/>

						<Text
							style={[
								styles.drawerText,
								routeNames[routeIndex] === 'BMIScreen' &&
									styles.drawerTextActive,
							]}
						>
							BMI
						</Text>
					</Pressable>

					<Pressable
						style={[
							styles.navContainer,
							routeNames[routeIndex] === 'Profile' && styles.navContainerActive,
						]}
						onPress={() => {
							props.navigation.navigate('Profile');
						}}
					>
						<AntDesign
							name={'profile'}
							size={30}
							color={routeNames[routeIndex] === 'Profile' ? '#ED4949' : 'black'}
						/>
						<Text
							style={[
								styles.drawerText,
								routeNames[routeIndex] === 'Profile' && styles.drawerTextActive,
							]}
						>
							Profile
						</Text>
					</Pressable>
				</DrawerContentScrollView>
			</View>

			<Pressable style={styles.logoutContainer} onPress={logout}>
				<Text style={styles.logoutText}>SIGN OUT</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? 25 : 0,
	},
	backButton: {
		marginVertical: 8,
		width: '100%',
		alignItems: 'flex-end',
	},
	container: {
		alignItems: 'center',
		width: '100%',
		height: '90%',
	},
	logoContainer: {
		backgroundColor: '#fff',
		width: '100%',
		height: 'auto',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 25,
	},
	image: {
		resizeMode: 'cover',
		width: 145,
		height: 145,
		borderRadius: 145 / 2,
	},
	navContainer: {
		flexDirection: 'row',
		minWidth: '95%',
		height: 50,
		alignItems: 'center',
		paddingLeft: 15,
		marginVertical: 10,
		borderRadius: 11,
	},
	navContainerActive: {
		backgroundColor: 'rgba(237, 73, 73, .3)',
	},
	logoutContainer: {
		flexDirection: 'row',
		width: '100%',
		height: 50,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	drawerText: {
		marginLeft: 16,
		color: 'black',
		fontFamily: 'Rockwell',
	},
	drawerTextActive: {
		color: '#ED4949',
	},
	logoutText: {
		color: '#b23b3b',
		fontFamily: 'Red Rose',
	},
});

export default CustomDrawerContainer;
