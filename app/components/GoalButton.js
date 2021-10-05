import React from "react";
import { Pressable, Image, Text, StyleSheet, View } from "react-native";

const GoalButton = ({
	buttonStyle,
	onPress,
	text,
	imageSrc,
	imageStyle,
	textStyle,
}) => {
	return (
		<Pressable style={styles.buttonContainer} onPress={onPress}>
			<View style={buttonStyle}>
				<Image style={imageStyle} source={imageSrc} />
				<Text style={textStyle}>{text}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		marginRight: 16,
	},
	buttonStyle: {
		width: 110,
		height: 110,
		backgroundColor: "rgba(237, 73, 73, 0.15)",
		borderRadius: 10,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: "center",
	},
	imageStyle: {
		width: 80,
		height: 62,
		resizeMode: "contain",
	},
	textStyle: {
		fontSize: 12,
		fontFamily: "Red Rose",
		color: "#ed4949",
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
