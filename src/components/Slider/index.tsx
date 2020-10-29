import React, { Dispatch } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";

import Tick from "./Tick";
import Track from "./Track";
import Handle from "./Handle";

const sliderStyle: React.CSSProperties = {
	margin: "5%",
	position: "relative",
	width: "90%"
};

const railStyle: React.CSSProperties = {
	position: "absolute",
	width: "100%",
	height: 14,
	borderRadius: 7,
	cursor: "pointer",
	backgroundColor: "rgb(155,155,155)"
};

interface Props {
	volumeRange: readonly number[];
	setVolumeRange: Dispatch<React.SetStateAction<readonly number[]>>;
}

export default function VolumeSlider({ volumeRange, setVolumeRange }: Props) {
	const domain: number[] = [0, 25];

	return (
		<div style={{ height: 120, width: "65vw", position: "absolute", bottom: "0" }}>
			<Slider
				mode={1}
				step={1}
				domain={domain}
				rootStyle={sliderStyle}
				onChange={(values) => setVolumeRange(values)}
				onUpdate={(values) => setVolumeRange(values)}
				values={volumeRange}
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
