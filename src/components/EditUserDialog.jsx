import React, { useEffect } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import { useDispatch, useUsersData } from '../context/UsersProvider'
import useFormStyles from '../styles/useFormFields'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { schema } from '../utils';
import { yupResolver } from '@hookform/resolvers/yup';
import NumberFormat from 'react-number-format';

const EditUserDialog = () => {

    const { openEditUserDialog, selectedUser } = useUsersData()
    const dispatch = useDispatch()
    const classes = useFormStyles()

    const objForm = useForm({
        resolver: yupResolver(schema),
    })

    const { register, handleSubmit, formState: { errors }, reset, setValue, control } = objForm;

    const onSubmit = async (updatedUser) => {
        dispatch({ type: 'CLOSE_EDIT_USER_DIALOG' })
        dispatch({ type: 'RESET_USERS' })
        await axios.put(`${process.env.REACT_APP_USERS_URL}/${selectedUser._id}`, updatedUser);

        const { data: users } = await axios.get(process.env.REACT_APP_USERS_URL)
        dispatch({ type: "GET_USERS", payload: users })
        reset();
    }

    useEffect(() => {
        setValue("name", selectedUser.name)
        setValue("lastName", selectedUser.lastName)
        setValue("email", selectedUser.email)
        setValue("phoneNumber", selectedUser.phoneNumber)
        setValue("cc", selectedUser.cc)
    }, [selectedUser])

    return (
        <Dialog
            open={openEditUserDialog}
            onClose={() => dispatch({ type: 'CLOSE_EDIT_USER_DIALOG' })}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <ManageAccountsIcon fontSize='large' />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent style={{ marginTop: 10 }}>
                    <DialogContentText id="alert-dialog-description">
                        <TextField
                            className={classes.formField}
                            fullWidth
                            id="name"
                            label="Nombre"
                            // defaultValue={selectedUser.name}
                            {...register("name")}
                            type="text"
                            error={Boolean(errors.name)} helperText={errors.name?.message}
                        />
                        <TextField
                            className={classes.formField}
                            fullWidth
                            id="name"
                            label="Apellido"
                            // defaultValue={selectedUser.lastName}
                            {...register("lastName")}
                            type="text"
                            error={Boolean(errors.lastName)} helperText={errors.lastName?.message}
                        />
                        <TextField
                            className={classes.formField}
                            fullWidth
                            type="email"
                            id="email"
                            label="E-mail"
                            // defaultValue={selectedUser.email}
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
                                    defaultValue={selectedUser.phoneNumber}
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
                            // defaultValue={selectedUser.cc}
                            {...register("cc")}
                            error={Boolean(errors.cc)} helperText={errors.cc?.message}
                        />

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        color="primary"
                        onClick={() => dispatch({ type: 'CLOSE_EDIT_USER_DIALOG' })}
                    >
                        Cancelar
                    </Button>
                    <Button
                        color="secondary"
                        type="submit"
                        autoFocus
                    >
                        Editar
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default EditUserDialog