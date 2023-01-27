import React from 'react';
import s from './About.module.css'
import common from '../../../common/commonStyles/Common.module.css'
import Borders from '../../../common/Borders/Borders';

type AboutType = {
    id: string
}

const About = (props: AboutType) => {
    return (
        <section className={`${common.sectionWrapper} ${s.wrapper}`} id={props.id}>
            <div className={s.myCard}>
                <Borders/>
                <div className={s.infoText}>
                    <h3 className={s.subtitle}>About me</h3>
                    <h2 className={s.title}>Front-end Developer</h2>
                    <p className={s.desc}>I'm Front-End developer with experience in creating SPA using React,
                        Redux/Redux Toolkit, TypeScript.
                        I am improving my skills in this direction and plan to expand them with new technologies, such
                        as Angular or React Native.
                        In the future I plan to become a full-stack developer, because I love learning new things and
                        exercising my brain :)
                        In my free time I like to read, solve some katas on Codewars, ride a bicycle and spent time with
                        my family.
                        Now I am also improving my English (my current level - pre-intermediate).

                        Open to your suggestions</p>
                </div>
            </div>
        </section>
    );
};

export default About;