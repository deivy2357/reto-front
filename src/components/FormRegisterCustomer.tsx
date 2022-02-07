import { Box, Button, TextField, Typography, } from '@mui/material';
import React from 'react';
import { store as createCustomer, customersType } from '../providers/customers';

const FormRegisterCustomer = () => {

    const onsubmit = (e: any) => {
        // Eviar peticion
        e.preventDefault();
        const data = {
            nombre: e.target.nombre.value,
            apellidos: e.target.apellidos.value,
            fecha_nacimiento: e.target.fecha_nacimiento.value,
        } as customersType;
        console.log("data a enviar: ", data);
        createCustomer(data);
    }

    return (
        <>
            <Box component="form" onSubmit={onsubmit} >
                <Typography variant="h5" component="h2">
                    Formulario de clientes
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Introduce los nombres del cliente"
                    name="nombre"
                    type="text"
                    autoFocus
                    size='small'
                    variant='standard'
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Introduce los apellidos del cliente"
                    name="apellidos"
                    type="text"
                    size='small'
                    variant='standard'
                />
                <TextField
                    sx={{ mt: 3 }}
                    margin="normal"
                    required
                    fullWidth
                    name="fecha_nacimiento"
                    type="date"
                    size='small'
                    helperText="Fecha de Nacimiento"
                    variant='standard'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Registar cliente
                </Button>
            </Box>
        </>
    );
};

export default FormRegisterCustomer;
