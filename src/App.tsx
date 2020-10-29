import React, { useState } from "react";
import "./styles/App.css";

import Data from "./data";
import Map from "./components/Map";
import Table from "./components/Table";
import VolumeSlider from "./components/Slider";

function App() {
	const [volumeRange, setVolumeRange] = useState<readonly number[]>([5, 15]);
	const [zoom, setZoom] = useState<number>(9);
	const [center, setCenter] = useState<{ lat: number; lng: number }>({ lat: 43.65107, lng: -79.347015 });

	const getVolume = ({ retail, service }): number => {
		return retail + service;
	};

	const inRange = (volume: number, range): boolean => {
		return volume > range[0] * 1000000 && volume < range[1] * 1000000;
	};

	const focusStore = (event, rowData) => {
		setZoom(13);
		setCenter(Data.stores.filter((store) => store.name === rowData.name)[0].coordinates);
	};

	const stores = Data.stores.filter((store) => inRange(getVolume(store.sales), volumeRange));

	// const getStores = () => {
	// 	return Data.stores.filter((store) => inRange(getVolume(store.sales), volumeRange));
	// };

	return (
		<div className="App">
			<Map apiKey={{ key: "AIzaSyCg5g5-VTNN02rjrHVb7lzWE4kYoQb7f_8" }} center={center} zoom={zoom} stores={stores} />
			<VolumeSlider volumeRange={volumeRange} setVolumeRange={setVolumeRange} />
			<Table stores={stores} onRowClick={focusStore} />
		</div>
	);
}

export default App;
