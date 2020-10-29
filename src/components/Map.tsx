import React from "react";
import Store from "./Store";
import GoogleMapReact from "google-map-react";

interface Props {
	apiKey: { key: string };
	center: {
		lat: number;
		lng: number;
	};
	zoom: number;
	stores: any;
}

export default function Map({ apiKey, center: defaultCenter, zoom, stores }: Props) {
	const renderStores = (): JSX.Element => {
		return stores.map(({ name, address, phone, coordinates, sales }, index) => (
			<Store key={index} name={name} address={address} phone={phone} sales={sales} {...coordinates} />
		));
	};

	return (
		<div className="map-container">
			<GoogleMapReact bootstrapURLKeys={apiKey} center={defaultCenter} zoom={zoom} children={renderStores()} />
		</div>
	);
}
