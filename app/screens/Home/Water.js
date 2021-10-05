import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	ScrollView,
} from 'react-native';

const Water = () => {
	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<ImageBackground
					source={require('../../assets/images/meal-bg-new.png')}
					style={styles.background}
					imageStyle={styles.backgroundImage}
					resizeMode={'cover'}
				>
					<View style={styles.overlay}>
						<Text style={[styles.text, styles.dashboardText]}>Dashboard</Text>
						<Text style={[styles.text, styles.waterText]}>Water Page</Text>

						<Text style={[styles.text, styles.welcomeBackText]}>
							Welcome back,
						</Text>
						<Text style={[styles.text, styles.usernameText]}>Webdot__</Text>
					</View>
				</ImageBackground>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 1,
		width: '100%',
		height: 'auto',
		backgroundColor: 'transparent',
	},
	backgroundImage: {
		height: '100%',
		minHeight: 200,
		maxHeight: 250,
	},
	overlay: {
		width: '100%',
		height: '100%',
		minHeight: 200,
		maxHeight: 250,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(237, 73, 73, 0.85)',
		paddingVertical: 40,
		position: 'absolute',
		top: 0,
		left: 0,
	},
	scrollView: {
		flexGrow: 1,
		alignItems: 'center',
		paddingBottom: 20,
	},
	text: {
		width: '85%',
		textAlign: 'left',
		color: '#fff',
	},
	dashboardText: {
		fontSize: 30,
		fontFamily: 'Red Rose',
		marginVertical: 8,
	},
	waterText: {
		fontSize: 18,
		fontFamily: 'Red Rose',
		opacity: 0.6,
		marginBottom: 20,
	},
	welcomeBackText: {
		fontSize: 14,
		fontFamily: 'Red Rose',
		marginBottom: 8,
	},
	usernameText: {
		fontSize: 24,
		fontFamily: 'Red Rose',
	},
});

export default Water;
