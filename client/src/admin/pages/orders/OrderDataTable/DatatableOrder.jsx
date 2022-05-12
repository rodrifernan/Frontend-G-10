import "./datatable.scss";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { userColumns, userRows } from "./datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { fetchProducts } from "../../../../redux/reducer/products";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getAllProducts,

} from "../../../../redux/reducer/products";
import { allOrdersRegisters } from "../../../../redux/reducer/getAllOrders";

const DatatableOrder = () => {


  let orderAll = useSelector(allOrdersRegisters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // dispatch(getAllCategories());
  }, []);
  let products = useSelector(getAllProducts);






  const [data, setData] = useState(orderAll);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Acción",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="2" style={{ textDecoration: "none" }}>
              <div className="viewButton">Ver</div>
            </Link>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Deshabilitar
            </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Ordenes
        {/* <Link to="new" className="link">
          Agregar producto
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={13}
        rowsPerPageOptions={[15]}
        // checkboxSelection
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
          columnMenuShowColumns: "Mostrar columnas"
        }}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default DatatableOrder;
