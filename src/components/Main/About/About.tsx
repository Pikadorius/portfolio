import React from 'react';
import s from './About.module.css'
import myImg from '../../../assets/pics/aboutme.jpg'

type AboutType = {
    id: string
}

const About = (props: AboutType) => {
    return (
        <div className={s.wrapper} id={props.id}>
            <div className={s.myCard}>
                <div className={s.infoText}>
                    <h3>Hello!</h3>
                    <h2>My name is Egor.</h2>
                    <p>I am trainee front-end developer!</p>
                </div>
            </div>
        </div>
    );
};

export default About;