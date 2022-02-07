import Grid from '@mui/material/Grid';
import FormRegisterCustomer from '../components/FormRegisterCustomer';
import { Box, Typography } from '@mui/material';


const RegisterCustomer = () => {
    return <>
        <Box sx={{ mt: 5, p: 2 }}>
            <Grid container spacing={3} sx={{ justifyContent: "center", alignItems: "center" }}>
                <Grid item xs={12} sm={6} md={5}>
                    <Typography variant='h6'>
                        REGISTRO DE CLIENTES
                    </Typography>
                    <Typography variant="body2">
                        Llene el formulario para registrar al cliente
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                    <FormRegisterCustomer />
                </Grid>
            </Grid>
        </Box>
    </>;
};

export default RegisterCustomer;
