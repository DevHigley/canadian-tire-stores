import _ from "lodash";
import React, { useEffect, useState } from "react";

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

const getVolume = (store: store): number => store.retail + store.service;

const inRange = (volume: number, range: number[]): boolean => _.inRange(volume / 1000000, range[0], range[1]);

const getFilteredStores = (range: number[]): store[] => stores_json.filter((store) => inRange(getVolume(store), range));

export function useLogic() {
	const domain = [0, 35];
	const [stores, setStores] = useState<store[]>([]);
	const [zoom, setZoom] = React.useState<number>(9);
	const [range, setRange] = useState<number[]>([5, 15]);
	const apiKey = { key: process.env.REACT_APP_MAP_API_KEY as string };
	const [center, setCenter] = useState<{ lat: number; lng: number }>({ lat: 43.65107, lng: -79.347015 });

	const updateStores = (range: number[]) => setStores(getFilteredStores(range));

	const onSliderUpdate = (values: number[]) => !_.isEqual(values, range) && setRange(values);

	const onSliderChange = (values: number[]) => !_.isEqual(values, range) && setRange(values);

	const onRowClick = (params) => {
		setCenter({ ..._.find(stores_json, (store) => store.id === params.data.id) });
		setZoom(12);
	};

	useEffect(() => updateStores(range), [range]);

	return { stores, domain, range, apiKey, zoom, center, onSliderChange, onSliderUpdate, onRowClick };
}
