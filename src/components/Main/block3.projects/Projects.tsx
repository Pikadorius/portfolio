import React from 'react';
import s from './Projects.module.css'
import Project from './Project/Project';


const Projects = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.projectsCard}>
                <div className={s.projectsCardName}><span>My projects</span></div>
                <div className={s.projectsField}>
                    <Project pic={'1'} name={'Counter'} description={'Counter with settings.'} link={'1'}/>
                    <Project pic={'2'} name={'Todolist'} description={'Todolist on Redux.'} link={'2'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;