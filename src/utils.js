import * as yup from "yup"

const nameValidation = (name) => {
    var regexp =/ /; // /^[a-z]{4,} /i
    const valid = regexp.test(name);

    return !valid ? {
      isValid: true,
    } : {
      isValid: false,
      errorMessage: 'El nombre no debe incluir espacios en blanco,ingrese un nombre válido',
    }
  }

  const lastNameValidation = (lastname) => {
    var regexp =/ /;
    const valid = regexp.test(lastname);

    return !valid ? {
      isValid: true,
    } : {
      isValid: false,
      errorMessage: 'El apellido no debe incluir espacios en blanco,ingrese un apellido válido',
    }
  }

export const schema = yup.object().shape({
    name: yup.string().test('validator-custom-name', function (value) {
        const validation = nameValidation(value);
        if (!validation.isValid) {
          return this.createError({
            path: this.path,
            message: validation.errorMessage,
          });
        }
        else {
          return true;
        }
      }).required("Nombre es requerido").trim("Ingrese su nombre"),
    lastName: yup.string().test('validator-custom-name', function (value) {
        const validation = lastNameValidation(value);
        if (!validation.isValid) {
          return this.createError({
            path: this.path,
            message: validation.errorMessage,
          });
        }
        else {
          return true;
        }
      }).required("Apellido es requerido").trim(),
    email: yup.string().email("Debe ser un mail valido").required("Email es requerido").trim(),
    phoneNumber: yup.string().required("Ingrese un número de teléfono").trim().min(19, 'Ingrese el número de teléfono completo').typeError('Ingrese un número de teléfono'),
    cc: yup.number().positive("Debe ser un nro positivo").required("Ingrese un número de identidad").typeError('Ingrese un número de identidad'),
})

