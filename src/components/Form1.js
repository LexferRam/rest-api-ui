import {
  TextField,
  Button
} from '@mui/material'
import { useDispatch } from '../context/UsersProvider'

import useFormStyles from '../styles/useFormFields'

const Form1 = ({objForm}) => {

  const {register, formState: { errors }} = objForm

  const dispatch = useDispatch()
  const classes = useFormStyles()

  return (
    <>
      <TextField
        className={classes.formField}
        fullWidth
        id="name"
        label="Nombre"
        defaultValue={''}
        {...register("name")} 
        type="text"
        error={Boolean(errors.name)} helperText={errors.name?.message}
      />
      <TextField
        className={classes.formField}
        fullWidth
        id="name"
        label="Apellido"
        defaultValue={''}
        {...register("lastName")} 
        type="text"
        error={Boolean(errors.lastName)} helperText={errors.lastName?.message}
      />
      <Button
        variant="contained"
        onClick={() => dispatch({type:'NEXT_STEP_FORM'})}
      >
        Siguiente
      </Button>
      </>
  )
}

export default Form1
