import React from 'react';
import s from './Projects.module.css'
import common from '../../../common/commonStyles/Common.module.css'
import Project from './Project/Project';
import pr1 from '../../../assets/pics/1.jpg'
import pr2 from '../../../assets/pics/2.png'
import pr3 from '../../../assets/pics/3.jpg'
import pr4 from '../../../assets/pics/4.png'
import pr5 from '../../../assets/pics/5.png'
import Carousel from 'react-material-ui-carousel';
import Borders from '../../../common/Borders/Borders';


type ProjectsType = {
    id: string
}

const Projects = (props: ProjectsType) => {

    return (
        <section className={common.sectionWrapper}>
            <div className={common.sectionContainer}>
                <Borders/>
                <div className={common.sectionName} id={props.id}>
                    <span>My projects</span>
                </div>
                <div className={common.sectionItemsField}>
                    <Carousel className={`${common.carousel} ${s.carousel}`} animation={'fade'}
                              navButtonsAlwaysVisible={true} stopAutoPlayOnHover={true} indicators={false}>
                        <Project pic={pr1}
                                 name={'Social Network'}
                                 description={'Social network. Used class and functional components, Redux, Redux-Form'}
                                 link={'https://pikadorius.github.io/Samurai-way-SN/'}
                                 codeLink={'https://github.com/Pikadorius/Samurai-way-SN'}/>
                        <Project pic={pr2}
                                 name={'Todolist (courses project)'}
                                 description={'Todolist on Redux. Used universal components, Material UI, Axios'}
                                 link={'https://pikadorius.github.io/todo_default/'}
                                 codeLink={'https://github.com/Pikadorius/todo_default'}/>
                        <Project pic={pr3}
                                 name={'Counter'}
                                 description={'Counter on Redux with Dan Abramov method \n to save and load from localStorage.'}
                                 link={'https://pikadorius.github.io/counter3/'}
                                 codeLink={'https://github.com/Pikadorius/counter3'}/>
                        <Project pic={pr4}
                                 name={'Todolist'}
                                 description={'My vision of todolist. Custom components, RHF, RRD, Redux Toolkit.'}
                                 link={'https://what-todo-app-kea.vercel.app/'}
                                 codeLink={'https://github.com/Pikadorius/new_todo'}/>
                        <Project pic={pr5}
                                 name={'Learning Cards App'}
                                 description={'Project in team work. Redux Toolkit, React Hook Form, React Router Dom, Yup and other libraries.'}
                                 link={'https://pikadorius.github.io/project_cards/'}
                                 codeLink={'https://github.com/Pikadorius/project_cards'}/>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Projects;