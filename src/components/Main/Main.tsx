import React from 'react';
import s from './Main.module.css'
import About from './About/About';
import Skills from './block2.skills/Skills';
import Projects from './block3.projects/Projects';
import Contacts from './Contacts/Contacts';
import Footer from '../Footer/Footer';
import Slide from '@mui/material/Slide';


const Main = () => {
    return (
        <div className={s.wrapper}>
            <Slide in={true} timeout={2000} direction={'down'}>
                <div><About id={'main'}/></div>
            </Slide>
            <Slide in={true} timeout={1500} direction={'down'}>
                <div><Skills id={'skills'}/></div>
            </Slide>
            <Slide in={true} timeout={1500} direction={'down'}>
                <div><Projects id={'projects'}/></div>
            </Slide>
            <Slide in={true} timeout={1000} direction={'down'}>
                <div> <Contacts id={'contacts'}/></div>
            </Slide>
            <Slide in={true} timeout={500} direction={'down'}>
                <div> <Footer/></div>
            </Slide>
        </div>
    );
};

export default Main;