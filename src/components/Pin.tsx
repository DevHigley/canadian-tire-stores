import React from "react";
import { store } from "../logic";
import { Tooltip } from "@material-ui/core";
import { BsFlagFill } from "react-icons/bs";

interface Props {
	store: store;
	lat: number;
	lng: number;
}

const renderTooltip = (store: store): JSX.Element => {
	return (
		<>
			<span>{store.name}</span>
			<br />
			<span>{`YTD Retail: $${store.retail.toLocaleString()}`}</span>
			<br />
			<span>{`YTD Service: $${store.service.toLocaleString()}`}</span>
			<br />
			<span>{store.phone}</span>
			<br />
			<span>{store.address}</span>
		</>
	);
};

export default function Store({ store }: Props) {
	return (
		<Tooltip title={renderTooltip(store)} placement={"top"} interactive>
			<div children={<BsFlagFill data-tip data-for={store.name} size={25} color={"red"} style={{ transform: "translateY(-100%)" }} />} />
		</Tooltip>
	);
}
