import axios from "axios";
import { API_CUSTOMER } from "../api/api";

export type customersType = {
  nombre: string;
  apellidos: string;
  fecha_nacimiento: string;
};

const store = (data: customersType) => {
  axios
    .post(API_CUSTOMER, data)
    .then(() => alert("Se creo correctamente el cliente"))
    .catch(() => alert("Error al registrar cliente"));
};

const getAll = async (): Promise<any> => {
  try {
    const response = await axios.get(API_CUSTOMER);
    return response.data.clientes;
  } catch (error) {
    console.warn(error);
    return [];
  }
};

//Obtener promedio total
const getAge = async (): Promise<number | null> => {
  try {
    const response = await axios.get(API_CUSTOMER + "/promedio-edad");
    return response.data.promedio;
  } catch (error) {
    console.warn(error);
    return null;
  }
};

export { store, getAll, getAge };
