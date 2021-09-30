import React from "react";
import { Pressable, Text } from "react-native";

const Button = ({ text, onPress, textStyle, buttonStyle }) => {
	return (
		<Pressable style={buttonStyle} onPress={onPress}>
			<Text style={textStyle}>{text}</Text>
		</Pressable>
	);
};

Button.defaultProps = {
	onPress: () => null,
	text: "Input text Please!",
};

export default Button;
