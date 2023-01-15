import React from 'react';
import s from './Main.module.css'
import About from './About/About';
import Skills from './block2.skills/Skills';
import Projects from './block3.projects/Projects';
import Contacts from './Contacts/Contacts';
import Footer from '../Footer/Footer';


const Main = () => {
    return (
        <div className={s.wrapper}>
            <About id={'main'}/>
            <Skills id={'skills'}/>
            <Projects id={'projects'}/>
            <Contacts id={'contacts'}/>
            <Footer/>
        </div>
    );
};

export default Main;