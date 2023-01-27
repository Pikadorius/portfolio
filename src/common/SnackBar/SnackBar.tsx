import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {setErrorAC} from '../../reducers/appReducer';

export default function SimpleSnackbar() {

    const error = useAppSelector<string | null>(state => state.app.error)
    const dispatch = useAppDispatch();

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setErrorAC(null))
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <Snackbar
            open={error!==null}
            autoHideDuration={6000}
            onClose={handleClose}
            message={error}
            action={action}
        />
    );
}