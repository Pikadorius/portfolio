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
                    <p className={s.desc}>Experienced Front-End developer with knowledge in creating
                        SPA using React, Redux/Redux Toolkit, TypeScript</p>
                    <p className={s.desc}>Improving my skills and trying to follow the latest and most
                        effective technologies</p>
                    <p className={s.desc}>Planning to study React Native, because my next focus is
                        to become a mobile developer</p>
                    <p className={s.desc}>Now I am also improving my English with tutor (my current level - pre-intermediate)</p>

                    <h4 className={s.sugg}>Open to your suggestions</h4>
                </div>
            </div>
        </section>
    );
};

export default About;