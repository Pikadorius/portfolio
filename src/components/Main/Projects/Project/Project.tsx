import React from 'react';
import s from './Project.module.css'
import Button from '@mui/material/Button';
import common from '../../../../common/commonStyles/Common.module.css'
import PreviewIcon from '@mui/icons-material/Preview';
import Paper from '@mui/material/Paper';

type ProjectType = {
    pic: string
    name: string
    description: string
    link: string
    codeLink: string
}

const Project = (props: ProjectType) => {
    return (
        <Paper elevation={10} className={s.projectCard}>
            <div className={s.projectPic} style={{
                backgroundImage: `url(${props.pic})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className={s.btnWrapper}>
                        <Button target={'_blank'} href={props.link} variant={'text'} size={'large'} className={s.btn}>
                            <PreviewIcon className={s.btnIcon} sx={{fontSize: '80px'}}/>
                        </Button>
                </div>
            </div>
            <div className={s.projectName}>{props.name}</div>
            <div className={s.projectDescription}>{props.description}</div>
            <div className={s.sendBtn}>
                <a rel={'noreferrer'} href={props.codeLink} target={'_blank'} className={s.codeBtn}>Watch code</a>
            </div>
        </Paper>
    );
};

export default Project;