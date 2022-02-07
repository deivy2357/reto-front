import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getEdad } from "../helpers/customers";
import { getAll as getCustomers } from "../providers/customers";

const columns: GridColDef[] = [
  { field: "nombre", headerName: "Nombre", width: 200 },
  { field: "apellidos", headerName: "Apellido", width: 200 },
  { field: "fecha_nacimiento", headerName: "Fecha Nacimiento", width: 150 },
  {
    field: "edad",
    headerName: "Edad",
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      getEdad(params.row.fecha_nacimiento),
  },
];

export default function TableCustomers() {
  const [customerList, SetCustomerList]: any = useState([]);
  useEffect(() => {
    //Solicitar data
    getCustomers().then((data) => SetCustomerList(data));
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={customerList}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
