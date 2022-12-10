import React from 'react';
import s from './Main.module.css'
import About from './block1.about/About';
import Skills from './block2.skills/Skills';
import Projects from './block3.projects/Projects';
import Work from './block4.work/Work';
import Contacts from './block5.contacts/Contacts';


const Main = () => {
    return (
        <div className={s.wrapper}>
            <About/>
            <Skills/>
            <Projects/>
            <Work/>
            <Contacts/>
        </div>
    );
};

export default Main;