import React from 'react';
import s from './Skill.module.css'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {SkillType} from '../../../../reducers/skillsReducer';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Skill: React.FC<SkillType> = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        // <div className={s.skillCard} onClick={handleOpen}>
        <Paper elevation={10} className={s.skillCard} onClick={handleOpen}>
            <div className={s.logo}><img src={props.logo} alt={'logo'}/></div>
            <div className={s.skillTitle}>{props.title}</div>
            <div className={s.popUp}>Click to see more</div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} onBlur={handleClose}>
                    <Paper elevation={20} id="modal-modal-description" sx={{mt: 2, display: 'flex', flexDirection: 'column', alignContent:'center'}}>
                        <div className={s.logo}><img src={props.logo} alt={'logo'}/></div>
                    </Paper>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className={s.skillDescription}>{props.description}</div>
                    </Typography>
                </Box>
            </Modal>

        </Paper>
        // </div>
    );
};

export default Skill;