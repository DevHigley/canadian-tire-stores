import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

import { store } from "../logic";

interface Props {
	stores: store[];
	onRowClick: (param) => void;
}

export default function DataTable({ stores, onRowClick }: Props) {
	const parentWidth = window.innerWidth * 0.3;

	const columns = [
		{ field: "id", hide: true },
		{ field: "name", headerName: "Store", width: parentWidth * 0.4 },
		{ field: "retail", headerName: "Retail (ytd)", width: parentWidth * 0.3, valueFormatter: ({ value }) => value?.toLocaleString() },
		{ field: "service", headerName: "Service (ytd)", width: parentWidth * 0.25, valueFormatter: ({ value }) => value?.toLocaleString() }
	];

	const rows = stores.map((store) => {
		return { id: store.id, name: store.name, retail: store.retail, service: store.service };
	});

	return (
		<div className={"table-container"}>
			<DataGrid className={""} columns={columns} rows={rows} onRowClick={onRowClick} autoPageSize />
		</div>
	);
}
