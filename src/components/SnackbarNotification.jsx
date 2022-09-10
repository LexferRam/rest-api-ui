import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useUsersData } from '../context/UsersProvider';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarNotification = () => {

    const { snackbar: { label, open, severity } } = useUsersData();
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch({type:"CLOSE_SNACKBAR_NOTIFICATION"});
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose}  severity={severity} sx={{ width: '100%' }}>
                {label}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarNotification