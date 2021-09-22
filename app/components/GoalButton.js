import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";

const GoalButton = ({
	buttonStyle,
	onPress,
	text,
	imageSrc,
	imageStyle,
	textStyle,
}) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={buttonStyle}>
				<Image
					style={imageStyle}
					source={imageSrc}
				/>
				<Text style={textStyle}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		width: 88,
		height: 88,
		backgroundColor: "rgba(237, 73, 73, 0.15)",
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 11,
		// },
		// shadowOpacity: 0.23,
		// shadowRadius: 15.19,
		// elevation: 23,
		borderRadius: 10,
        justifyContent: 'center'
	},
	imageStyle: {
		width: 80,
		height: 62,
		resizeMode: "contain",
	},
	textStyle: {
		fontSize: 12,
		color: "#ed4949",
		fontWeight: "bold",
		marginTop: 5,
		width: "100%",
		textAlign: "center",
	},
});

GoalButton.defaultProps = {
	buttonStyle: styles.buttonStyle,
	onPress: () => null,
	imageStyle: styles.imageStyle,
	textStyle: styles.textStyle,
};

export default GoalButton;
