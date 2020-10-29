import * as React from "react";
import { SliderItem, GetTrackProps } from "react-compound-slider";

interface Props {
	source: SliderItem;
	target: SliderItem;
	getTrackProps: GetTrackProps;
}

export default function Track({ source, target, getTrackProps }: Props) {
	return (
		<div
			style={{
				position: "absolute",
				height: 14,
				zIndex: 1,
				backgroundColor: "#7aa0c4",
				borderRadius: 7,
				cursor: "pointer",
				left: `${source.percent}%`,
				width: `${target.percent - source.percent}%`
			}}
			{...getTrackProps()}
		/>
	);
}
