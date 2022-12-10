import React from 'react';
import s from './About.module.css'
import my_photo from '../../../assets/pics/aboutme.jpg'

const About = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.aboutCard}>
                <div className={s.text}>
                    <h3>Hello!</h3>
                    <h2>My name is Egor.</h2>
                    <p>I am trainee front-end developer!</p>
                </div>
                <div className={s.photo}><img src={my_photo} alt={'Me and my family'}/></div>
            </div>
        </div>
    );
};

export default About;