import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Banner = ({ signupBanner }) => {
	const imageSrc = signupBanner
		? require("../assets/images/banner-background.png")
		: require("../assets/images/banner-image.png");

	return (
		<View style={bannerStyles.container}>
			<Text style={bannerStyles.text}>NutriFit</Text>
			<Image style={ signupBanner ? bannerStyles.signupImage :bannerStyles.image } source={imageSrc} />
		</View>
	);
};

Banner.defaultProps = {
	signupBanner: false,
};

const bannerStyles = StyleSheet.create({
	container: {
		backgroundColor: "#ed4949",
		width: "100%",
		height: 350,
		borderRadius: 10,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
		marginTop: -10,
	},
	image: {
		width: 300,
		height: 250,
		resizeMode: "contain",
		marginLeft: 130,
	},
    signupImage: {
		resizeMode: "contain",
        marginTop: -55
	},
	text: {
		color: "#fff",
		fontSize: 48,
		fontWeight: "bold",
		fontFamily: "Rockwell",
		textAlign: "center",
		marginTop: 106,
	},
});

export default Banner;
