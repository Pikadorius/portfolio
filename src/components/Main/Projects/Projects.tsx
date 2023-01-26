import React from 'react';
import s from './Projects.module.css'
import common from '../../../common/commonStyles/Common.module.css'
import Project from './Project/Project';
import pr1 from '../../../assets/pics/1.jpg'
import pr2 from '../../../assets/pics/2.jpg'
import pr3 from '../../../assets/pics/3.jpg'
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
                                 name={'Todolist'}
                                 description={'Todolist on Redux. Used universal components, Material UI, Axios'}
                                 link={'https://pikadorius.github.io/todolist-on-redux/'}
                                 codeLink={'https://github.com/Pikadorius/todolist-on-redux'}/>
                        <Project pic={pr3}
                                 name={'Counter'}
                                 description={'Counter on Redux with Dan Abramov method \n to save and load from localStorage.'}
                                 link={'https://pikadorius.github.io/counter3/'}
                                 codeLink={'https://github.com/Pikadorius/counter3'}/>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Projects;