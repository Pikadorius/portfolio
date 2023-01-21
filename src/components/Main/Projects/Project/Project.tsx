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
                            <PreviewIcon fontSize={'large'} className={s.btnIcon}/>
                        </Button>
                </div>
            </div>
            <div className={s.projectName}>{props.name}</div>
            <div className={s.projectDescription}>{props.description}</div>
        </Paper>
    );
};

export default Project;