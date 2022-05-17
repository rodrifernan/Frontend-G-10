import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/reducer/getAllUsers";
import { allUserRegisters } from "../../../redux/reducer/getAllUsers";

const Datatable = () => {
	let data = useSelector(allUserRegisters);
	console.log("aluser", data);

	const dispatch = useDispatch();

	const [select, setSelection] = useState(null);

	useEffect(() => {
		// dispatch(getAllOrders());
		dispatch(getAllUsers());
	}, [dispatch, data.banned]);

	const handleRowSelection = (ids) => {
		const selectedIDs = new Set(ids);
		const selectedRowData = data.filter((row) =>
			selectedIDs.has(row.id.toString())
		);
		console.log(selectedRowData);
		const validator = selectedRowData[0] ? selectedRowData[0].id : null;
		setSelection(validator);
	};

	return (
		<div className="datatable">
			<div className="datatableTitle">
				Usuarios
				<div>
					{select !== null ? (
						<Link to={select} className="link">
							Ver
						</Link>
					) : null}
					<Link to="new" className="link">
						Agregar usuario
					</Link>
				</div>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns}
				pageSize={5}
				rowsPerPageOptions={[9]}
				checkboxSelection
				autoPageSize
				autoHeight
				onSelectionModelChange={handleRowSelection}
				localeText={{
					toolbarColumns: "Columnas",
					toolbarFilters: "Filtros",
					toolbarDensity: "Densidad",
					toolbarExport: "Exportar",
					columnMenuUnsort: "No clasificado",
					columnMenuSortAsc: "Ascendente ",
					columnMenuSortDesc: "Descendente",
					columnMenuFilter: "Filtro",
					columnMenuHideColumn: "Ocultar",
					columnMenuShowColumns: "Mostrar columnas",
				}}
				components={{ Toolbar: GridToolbar }}
			/>
		</div>
	);
};

export default Datatable;
