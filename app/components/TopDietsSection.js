import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';

import CustomButton from '../components/Button';

const secondLayout = [
	{
		key: '1',
		width: '100%',
		height: 100,
	},
];

const TopDietsSection = ({ data, loading }) => {
	return (
		<View style={styles.topDietsContainer}>
			<View style={styles.topDietsTop}>
				<Text style={styles.topDietsTopTitle}>Top Diets</Text>
				<CustomButton text={'See All'} textStyle={styles.seeAll} />
			</View>
			<SkeletonContent
				containerStyle={styles.secondLayout}
				layout={secondLayout}
				isLoading={loading}
			>
				<FlatList
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					data={data}
					renderItem={({ item }) => (
						<View style={styles.topDiet}>
							<View style={styles.topDietImageContainer}>
								<Image
									style={styles.topDietImage}
									source={{ uri: item.image }}
								/>
							</View>
							<Text
								numberOfLines={2}
								ellipsizeMode='tail'
								style={styles.topDietText}
							>
								{item.name ?? item.names}
							</Text>
						</View>
					)}
					keyExtractor={(item) => item._id}
					horizontal={true}
					initialNumToRender={4}
				/>
			</SkeletonContent>
		</View>
	);
};

const styles = StyleSheet.create({
	topDietsContainer: {
		width: '85%',
		marginTop: 30,
	},
	secondLayout: {
		width: '100%',
		height: 100,
	},
	topDietsTop: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	topDietsTopTitle: {
		fontSize: 24,
		color: '#ed4949',
		fontFamily: 'Red Rose',
	},
	seeAll: {
		fontSize: 12,
		color: '#c4c4c4',
		fontFamily: 'Red Rose',
	},
	topDiet: {
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(237, 73, 73, 0.07)',
		borderRadius: 100 / 2,
		marginRight: 16,
		overflow: 'hidden',
	},
	topDietImageContainer: {
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	topDietImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	topDietText: {
		width: '70%',
		fontSize: 11,
		fontFamily: 'Red Rose',
		color: 'rgba(0, 0, 0, 0.5)',
		textAlign: 'center',
	},
});

export default TopDietsSection;
