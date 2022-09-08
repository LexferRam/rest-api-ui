import {
  TextField,
  Button
} from '@mui/material'
import { useDispatch } from '../context/UsersProvider'

import useFormStyles from '../styles/useFormFields'

const Form2 = ({objForm}) => {

  const {register, formState: { errors }} = objForm

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
      <TextField
        className={classes.formField}
        fullWidth
        id="phoneNumber"
        label="Teléfono"
        defaultValue={''}
        {...register("phoneNumber")} 
        error={Boolean(errors.phoneNumber)} helperText={errors.phoneNumber?.message} 
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
        onClick={() => dispatch({type:'RESET_STEP_FORM'})}
      >
        Anterior
      </Button>
      <Button
        variant="contained"
        type="submit"
      >
        Enviar
      </Button>
      </>
  )
}

export default Form2
