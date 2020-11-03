import React, { useEffect, useState } from "react";
import _ from "lodash";

const stores_json = require("./stores.json");

export interface store {
	id: number;
	name: string;
	phone: string;
	address: string;
	retail: number;
	service: number;
	lat: number;
	lng: number;
}

const getVolume = (store: store): number => {
	return store.retail + store.service;
};

const inRange = (volume: number, range: number[]): boolean => {
	return _.inRange(volume / 1000000, range[0], range[1]);
};

const getFilteredStores = (range: number[]): store[] => {
	console.log("getFilteredStores");
	return stores_json.filter((store) => inRange(getVolume(store), range));
};

export function useLogic() {
	const domain = [0, 35];
	const [range, setRange] = useState<number[]>([5, 15]);
	const apiKey = { key: process.env.REACT_APP_MAP_API_KEY as string };
	const [zoom, setZoom] = React.useState<number>(9);
	const [center, setCenter] = useState<{ lat: number; lng: number }>({ lat: 43.65107, lng: -79.347015 });
	const [stores, setStores] = useState<store[]>([]);

	const updateStores = (range: number[]) => {
		console.log("updateStores");
		setStores(getFilteredStores(range));
	};

	const onSliderUpdate = (values: number[]) => {
		if (!_.isEqual(values, range)) {
			console.log("onSliderUpdate");
			setRange(values);
		}
	};

	const onSliderChange = (values: number[]) => {
		if (!_.isEqual(values, range)) {
			console.log("onSliderChange");
			setRange(values);
		}
	};

	const onRowClick = (params) => {
		const clickedStore = _.find(stores_json, (store) => store.id === params.data.id);
		setCenter({ lat: clickedStore.lat, lng: clickedStore.lng });
		setZoom(11);
	};

	useEffect(() => {
		console.log("useEffect");
		updateStores(range);
	}, [range]);

	return { stores, domain, range, apiKey, zoom, center, onSliderChange, onSliderUpdate, onRowClick };
}
