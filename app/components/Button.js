import React from "react";
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ text, onPress, textStyle, buttonStyle }) => {
	return (
		<TouchableOpacity
			style={buttonStyle}
			onPress={onPress}
		>
			<Text
				style={textStyle}
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

Button.defaultProps = {
	onPress: () => null,
	text: 'Input text Please!'
}

export default Button;
