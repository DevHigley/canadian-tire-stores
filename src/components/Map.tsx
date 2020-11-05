import React from "react";
import Pin from "./Pin";
import { store } from "../logic";
import isEqual from "lodash/isEqual";
import GoogleMapReact from "google-map-react";

interface Props {
	bootstrapURLKeys: { key: string };
	center: { lat: number; lng: number };
	stores: store[];
	zoom: number;
}

function Map({ bootstrapURLKeys, center, zoom, stores }: Props) {
	const renderStores = (): JSX.Element[] => {
		console.log("renderStores");
		return stores.map((store, index) => <Pin key={index} store={store} lat={store.lat} lng={store.lng} />);
	};

	console.log("renderMap");

	return (
		<div className="map-container">
			<GoogleMapReact bootstrapURLKeys={bootstrapURLKeys} center={center} zoom={zoom} children={renderStores()} />
		</div>
	);
}

export default React.memo(Map, (prevProps, nextProps) => isEqual(prevProps, nextProps));
