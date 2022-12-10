import React from 'react';
import s from './Projects.module.css'


const Projects = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.projectsCard}>
                <div className={s.projectsCardName}><span>My projects</span></div>
                <div className={s.projectsField}>

                </div>
            </div>
        </div>
    );
};

export default Projects;