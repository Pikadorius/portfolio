import React from 'react';
import s from './Projects.module.css'
import Project from './Project/Project';

type ProjectsType = {
    id: string
}

const Projects = (props:ProjectsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.projectsCard}>
                <div className={s.projectsCardName} id={props.id}><span>My projects</span></div>
                <div className={s.projectsField}>
                    <Project pic={'1'} name={'Counter'} description={'Counter with settings.'} link={'1'}/>
                    <Project pic={'2'} name={'Todolist'} description={'Todolist on Redux.'} link={'2'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;