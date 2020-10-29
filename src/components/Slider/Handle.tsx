import * as React from "react";
import { SliderItem, GetHandleProps } from "react-compound-slider";

interface Props {
	domain: number[];
	handle: SliderItem;
	getHandleProps: GetHandleProps;
}

export default function Handle({ domain: [min, max], handle: { id, value, percent }, getHandleProps }: Props) {
	return (
		<div
			role="slider"
			aria-valuemin={min}
			aria-valuemax={max}
			aria-valuenow={value}
			style={{
				left: `${percent}%`,
				position: "absolute",
				marginLeft: "-11px",
				marginTop: "-6px",
				zIndex: 2,
				width: 24,
				height: 24,
				cursor: "pointer",
				borderRadius: "50%",
				boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
				backgroundColor: "#34568f"
			}}
			{...getHandleProps(id)}
		/>
	);
}
