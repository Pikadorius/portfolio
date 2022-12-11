import React from 'react';
import s from './Projects.module.css'
import Project from './Project/Project';
import pr1 from '../../../assets/pics/1.jpg'
import pr2 from '../../../assets/pics/2.jpg'
import pr3 from '../../../assets/pics/3.jpg'


type ProjectsType = {
    id: string
}

const Projects = (props: ProjectsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.projectsCard}>
                <div className={s.projectsCardName} id={props.id}><span>My projects</span></div>
                <div className={s.projectsField}>
                    <Project pic={pr1}
                             name={'Social Network'}
                             description={'Social network without graphic design. Used class and functional components, Redux'}
                             link={'https://pikadorius.github.io/Samurai-way-SN/'}/>
                    <Project pic={pr2}
                             name={'Todolist'}
                             description={'Todolist on Redux. Used universal components and Material UI.'}
                             link={'https://pikadorius.github.io/todolist4/'}/>
                    <Project pic={pr3}
                             name={'Counter'}
                             description={'Counter or Redux with Dan Abramov method \n to save and load loaclStorage data.'}
                             link={'https://pikadorius.github.io/counter3/'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;