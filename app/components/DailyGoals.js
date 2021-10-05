import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import GoalButton from './GoalButton';


const DailyGoals = ({ navigation }) => {
	//Goal button data to map through
	const goalButtonData = [
		{
			id: '1',
			text: 'Meal Plan',
			imageSrc: require('../assets/images/plate.png'),
			onPress: () => navigation.navigate('Meal Plan'),
		},
		{
			id: '2',
			text: 'Workout',
			imageSrc: require('../assets/images/workout.png'),
			onPress: () => navigation.navigate('Workout'),
			imageStyle: {
				resizeMode: 'contain',
				marginLeft: 20,
			},
		},
		{
			id: '3',
			text: 'Water',
			imageSrc: require('../assets/images/water.png'),
			onPress: () => navigation.navigate('Water'),
		},
	];

	return (
		<>
			<Text style={styles.titleText}>Daily Goals</Text>
			<View style={styles.goalButtonsContainer}>	
				<FlatList
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					data={goalButtonData}
					renderItem={({ item: {text, imageSrc, onPress, ...restProps} }) => (
						<GoalButton
							text={text}
							imageSrc={imageSrc}
							onPress={onPress}
							{...restProps}
						/>
					)}
					keyExtractor={(item) => item.id}
					horizontal={true}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	titleText: {
		width: '85%',
		textAlign: 'left',
		fontSize: 24,
		fontFamily: 'Red Rose',
		color: '#ed4949',
		marginBottom: 15,
	},
	goalButtonsContainer: {
		width: '85%',
		flexDirection: 'row',
		marginBottom: 30,
	},
});

export default DailyGoals;
