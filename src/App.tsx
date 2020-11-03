import React from "react";
import "./styles/App.css";

import { useLogic } from "./logic";
import Map from "./components/Map";
import Table from "./components/Table";
import VolumeSlider from "./components/Slider";

function App() {
	const { stores, domain, range, apiKey, zoom, center, onSliderChange, onSliderUpdate, onRowClick } = useLogic();

	return (
		<div className="App">
			<Map bootstrapURLKeys={apiKey} center={center} zoom={zoom} stores={stores} />
			<VolumeSlider domain={domain} range={range} onChange={onSliderChange} onUpdate={onSliderUpdate} />
			<Table stores={stores} onRowClick={onRowClick} />
		</div>
	);
}

export default App;
