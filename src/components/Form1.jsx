import {
  TextField,
  Button
} from '@mui/material'
import { Controller } from 'react-hook-form';
import { useDispatch } from '../context/UsersProvider'

import useFormStyles from '../styles/useFormFields'

const Form1 = ({objForm}) => {

  const {register, formState: { errors }} = objForm
  // const {control, formState: { errors }} = objForm;

  const dispatch = useDispatch()
  const classes = useFormStyles()

  return (
    <>
      <TextField
        className={classes.formField}
        fullWidth
        id="name"
        label="Nombre"
        {...register("name")} 
        type="text"
        error={Boolean(errors.name)} 
        helperText={errors.name?.message}
      />
      <TextField
        className={classes.formField}
        fullWidth
        id="name"
        label="Apellido"
        {...register("lastName")} 
        type="text"
        error={Boolean(errors.lastName)} 
        helperText={errors.lastName?.message}
      />
      {/* <Controller
        name="name"
        control={control}
        className={classes.formField}
        fullWidth
        label="Nombre"
        // {...register("name")}
        type="text"
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
        render={({ field }) => <TextField {...field} />}
      />
      <Controller
        name="lastName"
        control={control}
        className={classes.formField}
        fullWidth
        label="Apellido"
        // {...register("lastName")}
        type="text"
        error={Boolean(errors.lastName)}
        helperText={errors.lastName?.message}
        render={({ field }) => <TextField {...field} />}
      /> */}
      <Button
        variant="contained"
        onClick={() => dispatch({type:'NEXT_STEP_FORM'})}
        disabled={errors.lastName?.message || Boolean(errors.name) }
      >
        Siguiente
      </Button>
      </>
  )
}

export default Form1
