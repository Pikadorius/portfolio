import React, {useState} from 'react';
import s from './Contacts.module.css'
import common from '../../../common/commonStyles/Common.module.css'
import Borders from '../../../common/Borders/Borders';
import TextField from "@mui/material/TextField";
import {inputLabelClasses} from "@mui/material/InputLabel";
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import SimpleSnackbar from '../../../common/SnackBar/SnackBar';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {sendMessage} from '../../../reducers/appReducer';

type ContactsType = {
    id: string
}

const TextFieldStyle = {
    // set the color of the label when not shrinked
    color: "white",
    [`&.${inputLabelClasses.shrink}`]: {
        // set the color of the label when shrinked (usually when the TextField is focused)
        color: "#987750",
    },
    [`&.${inputLabelClasses.focused}`]: {
        // set the color of the label when shrinked (usually when the TextField is focused)
        color: "#987750",
    },
}


const style = {
    margin: '20px 0',
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "#987750",
        }
    }
}

export type FormType = {
    name: string
    email: string
    phone?: string
    message: string
}

const schema = yup.object({
    name: yup.string().trim().required(),
    email: yup.string().email().trim().required(),
    message: yup.string().min(5).max(200).trim().required(),
}).required();


const Contacts = (props: ContactsType) => {


    const status = useAppSelector(state => state.app.status)
    const isLoading = status === 'loading'

    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<FormType>({
        resolver: yupResolver(schema)
    });
    const submit = (data: FormType) => {
        console.log(data)
        dispatch(sendMessage(data))
        reset()
    }


    return (
        <section className={common.sectionWrapper}>
            <div className={common.sectionContainer}>
                <Borders/>
                <div id={props.id} className={common.sectionName}><span>Contact me!</span></div>
                <div className={s.desc}>You can leave your questions and suggestions here:</div>
                <form action="#" className={s.form} onSubmit={handleSubmit(submit)}>
                    <TextField
                        disabled={isLoading}
                        {...register('name')}
                        className={s.formField}
                        sx={style}
                        label={errors.name? errors.name.message : 'Name'}
                        InputLabelProps={{
                            sx: TextFieldStyle
                        }}
                    />

                    <TextField
                        disabled={isLoading}
                        {...register('email')}
                        className={s.formField}
                        sx={style}
                        label={errors.email? errors.email.message : 'Email'}
                        InputLabelProps={{
                            sx: TextFieldStyle
                        }}
                    />

                    <TextField
                        disabled={isLoading}
                        {...register('phone')}
                        className={s.formField}
                        sx={style}
                        label="Phone"
                        InputLabelProps={{
                            sx: TextFieldStyle
                        }}
                    />

                    <TextField
                        disabled={isLoading}

                        {...register('message')}
                        className={s.formField}
                        sx={style}
                        label={errors.message? errors.message.message : 'Message'}
                        InputLabelProps={{
                            sx: TextFieldStyle
                        }}
                        multiline={true}
                        rows={4}
                    />


                    <div className={s.sendBtn}>
                        <button disabled={isLoading}
                                type={'submit'} className={s.btn}>Send
                        </button>
                    </div>
                </form>
                <SimpleSnackbar/>
            </div>
        </section>
    );
};

export default Contacts;