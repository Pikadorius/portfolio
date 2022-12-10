import React from 'react';
import s from './Project.module.css'

type ProjectType = {
    pic: string
    name: string
    description: string
    link: string
}

const Project = (props: ProjectType) => {
    return (
        <div className={s.projectCard}>
            <div className={s.projectPic} style={{backgroundImage: props.pic}}>
                <div className={s.btnWrapper}>
                    <button>Watch</button>
                </div>
            </div>
            <div className={s.projectName}>{props.name}</div>
            <div className={s.projectDescription}>{props.description}</div>
        </div>
    );
};

export default Project;