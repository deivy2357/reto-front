import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TableCustomers from "../components/TableCustomers";
import { getAge } from "../providers/customers";
import { getAll as getCustomers } from "../providers/customers";

const ListCustomer = () => {
  const [edad, setEdad] = useState<number | null>(null);

  useEffect(() => {
    getAge().then((age) => setEdad(age));
  }, []);

  return (
    <>
      <Box sx={{ mt: 5, p: 2 }}>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid item xs={12} sm={5} md={4}>
            <Typography variant="h6">CLIENTES REGISTRADOS</Typography>
            <Typography variant="body2">
              Promedio de edad: {edad ? edad : "-"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <TableCustomers />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ListCustomer;
