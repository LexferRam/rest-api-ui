import * as yup from "yup"

export const schema = yup.object().shape({
    name: yup.string().required("Nombre es requerido"),
    lastName: yup.string().required("Apellido es requerido"),
    email: yup.string().email("Debe ser un mail valido").required("Email es requerido"),
    phoneNumber: yup.number().positive("Debe ser un nro positivo").required("Ingrese un número de teléfono").typeError('Ingrese un número de teléfono'),
    cc: yup.number().positive("Debe ser un nro positivo").required("Ingrese un número de identidad").typeError('Ingrese un número de identidad'),
})