import React from "react";
import ReactTooltip from "react-tooltip";
import { BsFlagFill } from "react-icons/bs";

interface Props {
	name: string;
	address: string;
	phone: string;
	sales: {
		retail: number;
		service: number;
	};
	lat: number;
	lng: number;
}

export default function Store({ name, address, phone, sales }: Props) {
	return (
		<>
			<BsFlagFill data-tip data-for={name} size={25} color={"red"} style={{ transform: "translate(-50%, -50%)" }} />
			<ReactTooltip id={name}>
				<span>
					{name}
					<br />
					{`YTD Retail: $${sales.retail.toLocaleString()}`}
					<br />
					{`YTD Service: $${sales.service.toLocaleString()}`}
					<br />
					{phone}
					<br />
					{address}
				</span>
			</ReactTooltip>
		</>
	);
}
