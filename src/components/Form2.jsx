import {
  TextField,
  Button,
  FormHelperText
} from '@mui/material'
import { useDispatch } from '../context/UsersProvider'

import NumberFormat from 'react-number-format';

import useFormStyles from '../styles/useFormFields'
import { Controller } from 'react-hook-form';

const Form2 = ({ objForm }) => {

  const { register, formState: { errors }, control } = objForm

  const dispatch = useDispatch()
  const classes = useFormStyles()

  return (
    <>
      <TextField
        className={classes.formField}
        fullWidth
        type="email"
        id="email"
        label="E-mail"
        defaultValue={''}
        {...register("email")}
        error={Boolean(errors.email)} helperText={errors.email?.message}
      />

      <Controller
        name="phoneNumber"
        control={control}
        placeholder="+(__) ____ ___-__-__"
        render={({ field }) => (
          <NumberFormat
            className={classes.formField}
            fullWidth
            label="Teléfono"
            mask=" "
            customInput={TextField}
            format={`+(##) #### ### ####`}
            defaultValue={''}
            {...register("phoneNumber")}
            error={Boolean(errors.phoneNumber)} helperText={errors.phoneNumber?.message}
            {...field}
          />
        )}
      />

      <TextField
        className={classes.formField}
        fullWidth
        type="number"
        id="cc"
        label="Documento de identidad"
        defaultValue={''}
        {...register("cc")}
        error={Boolean(errors.cc)} helperText={errors.cc?.message}
      />
      <Button
        className={classes.formButtons}
        variant="outlined"
        onClick={() => dispatch({ type: 'RESET_STEP_FORM' })}
      >
        Anterior
      </Button>
      <Button
        variant="contained"
        type="submit"
      >
        Enviar
      </Button>
      <FormHelperText error>
        {Boolean(errors.name) && errors.name?.message}
      </FormHelperText>
      <FormHelperText error>
        {Boolean(errors.lastName) && errors.lastName?.message}
      </FormHelperText>
    </>
  )
}

export default Form2


