import React from 'react';
import s from '../../block2.skills/Skill/Skill.module.css';

type ProjectType = {
    pic: string
    name: string
    description: string
}

const Project = (props:ProjectType) => {
    return (
            <div className={s.projectCard}>
                <div className={s.projectPic} style={{backgroundImage:props.pic}}><button>Watch</button></div>
                <div className={s.projectName}>{props.name}</div>
                <div className={s.projectDescription}>{props.description}</div>
            </div>
    );
};

export default Project;