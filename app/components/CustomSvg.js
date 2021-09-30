import React from "react";
import { SvgXml } from "react-native-svg";

const CustomSvg = ({ svgcode, width, height }) => {
	const Svg = () => (
		<SvgXml
			xml={svgcode}
			width={width}
			height={height}
		/>
	);
	return (
		<Svg />
	);
};

export default CustomSvg;
