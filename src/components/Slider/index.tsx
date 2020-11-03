import React from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";

import Tick from "./Tick";
import Track from "./Track";
import Handle from "./Handle";

const sliderStyle: React.CSSProperties = {
	width: "90%",
	margin: "5%",
	position: "relative"
};

const railStyle: React.CSSProperties = {
	height: 14,
	width: "100%",
	borderRadius: 7,
	cursor: "pointer",
	position: "absolute",
	backgroundColor: "rgb(155,155,155)"
};

interface Props {
	domain: number[];
	range: readonly number[];
	onChange: (values: number[]) => void;
	onUpdate: (values: number[]) => void;
}

export default function VolumeSlider({ domain, range, onChange, onUpdate }: Props) {
	return (
		<div className={"slider-container"}>
			<Slider
				mode={1}
				step={1}
				values={range}
				domain={domain}
				rootStyle={sliderStyle}
				onChange={(values) => onChange(values as number[])}
				onUpdate={(values) => onUpdate(values as number[])}
			>
				<Rail>{({ getRailProps }) => <div style={railStyle} {...getRailProps()} />}</Rail>
				<Handles>
					{({ handles, getHandleProps }) => (
						<div className="slider-handles">
							{handles.map((handle) => (
								<Handle key={handle.id} handle={handle} domain={domain} getHandleProps={getHandleProps} />
							))}
						</div>
					)}
				</Handles>
				<Tracks left={false} right={false}>
					{({ tracks, getTrackProps }) => (
						<div className="slider-tracks">
							{tracks.map(({ id, source, target }) => (
								<Track key={id} source={source} target={target} getTrackProps={getTrackProps} />
							))}
						</div>
					)}
				</Tracks>
				<Ticks count={5}>
					{({ ticks }) => (
						<div className="slider-ticks">
							{ticks.map((tick) => (
								<Tick key={tick.id} tick={tick} count={ticks.length} />
							))}
						</div>
					)}
				</Ticks>
			</Slider>
		</div>
	);
}
