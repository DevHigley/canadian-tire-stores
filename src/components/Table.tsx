import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

interface Props {
	stores: any;
	onRowClick: (event, rowData) => void;
}

export default function Table({ stores, onRowClick }: Props) {
	const processData = () => {
		return stores.map((store) => {
			return { name: store.name, retail: store.sales.retail, service: store.sales.service };
		});
	};

	return (
		<div style={{ width: "30vw", height: "100vh", overflow: "scroll" }}>
			<MaterialTable
				options={{ search: false, paging: false, showTitle: false, toolbar: false }}
				icons={{ SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />) }}
				columns={[
					{ title: "Store", field: "name", type: "string" },
					{ title: "Retail YTD", field: "retail", type: "currency" },
					{ title: "Service YTD", field: "service", type: "currency" }
				]}
				data={processData()}
				onRowClick={onRowClick}
			/>
		</div>
	);
}
