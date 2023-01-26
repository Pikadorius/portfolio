import React from 'react';
import s from './Contacts.module.css'
import common from '../../../common/commonStyles/Common.module.css'
import Borders from '../../../common/Borders/Borders';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from "@mui/material/TextField";
import { inputLabelClasses } from "@mui/material/InputLabel";

type ContactsType = {
    id: string
}

const TextFieldStyle = {
    // set the color of the label when not shrinked
    color: "white",
    [`&.${inputLabelClasses.shrink}`]: {
        // set the color of the label when shrinked (usually when the TextField is focused)
        color: "#987750",
        fontSize: '20px',
        borderColor: "#987750",
    }
}

const Contacts = (props: ContactsType) => {

    return (
        <section className={common.sectionWrapper}>
            <div className={common.sectionContainer}>
                <Borders/>
                <div id={props.id} className={common.sectionName}><span>Contact me!</span></div>
                <div className={s.desc}>You can leave your questions and suggestions here:</div>
                <form action="#" className={s.form}>
                    <FormControl sx={{margin:'20px'}}>
                        <TextField
                            sx={{margin: '20px'}}
                            label="Email"
                            InputLabelProps={{
                                sx: TextFieldStyle
                            }}
                        />

                        <TextField
                            label="Phone"
                            InputLabelProps={{
                                sx: {
                                    // set the color of the label when not shrinked
                                    color: "white",
                                    [`&.${inputLabelClasses.shrink}`]: {
                                        // set the color of the label when shrinked (usually when the TextField is focused)
                                        color: "#987750",
                                        fontSize: '20px'
                                    }
                                }
                            }}
                        />

                        <TextField
                            label="Question or suggestion"
                            InputLabelProps={{
                                sx: {
                                    // set the color of the label when not shrinked
                                    color: "white",
                                    [`&.${inputLabelClasses.shrink}`]: {
                                        // set the color of the label when shrinked (usually when the TextField is focused)
                                        color: "#987750",
                                        fontSize: '20px'
                                    }
                                }
                            }}
                        />
                    </FormControl>

                </form>
                <div className={s.sendBtn}>
                    <button className={s.btn}>Send</button>
                </div>
            </div>
        </section>
    );
};

export default Contacts;