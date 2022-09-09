import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useDispatch, useUsersData } from '../context/UsersProvider'

const DeleteUserDialog = () => {

    const {openDeleteUserDialog,selectedUser} = useUsersData()
    const dispatch = useDispatch()

    return (
            <Dialog
                open={openDeleteUserDialog}
                onClose={() => dispatch({type:'CLOSE_DELETE_USER_DIALOG'})}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       Seguro que desea eliminar el usuario <b>{selectedUser.name} {selectedUser.lastName}</b>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button 
                    color="primary"
                    onClick={() => dispatch({type:'CLOSE_DELETE_USER_DIALOG'})}
                    >Cancelar</Button>
                    <Button 
                    color="secondary"
                    onClick={async() => {
                        dispatch({type:'CLOSE_DELETE_USER_DIALOG'})
                        dispatch({ type: 'RESET_USERS' })                
                        await axios.delete(`${process.env.REACT_APP_USERS_URL}/${selectedUser._id}`)
                        const { data: users } = await axios.get(process.env.REACT_APP_USERS_URL)
                        dispatch({ type: "GET_USERS", payload: users })
                        dispatch({type:'HANDLE_CHANGE_PAGE', payload: 0})
                    }} 
                    autoFocus>
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
    )
}

export default DeleteUserDialog