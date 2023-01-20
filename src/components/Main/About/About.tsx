import React from 'react';
import s from './About.module.css'
import common from '../../../common/commonStyles/Common.module.css'
import Borders from '../../../common/Borders/Borders';

type AboutType = {
    id: string
}

const About = (props: AboutType) => {
    return (
        <div className={`${common.sectionWrapper} ${s.wrapper}`} id={props.id}>
            <div className={s.myCard}>
                <Borders/>
                <div className={s.infoText}>
                    <h3 className={s.subtitle}>About me</h3>
                    <h2 className={s.title}>Front-end Developer</h2>
                    <p className={s.desc}>I'm frontend developer with
                        experience in creating SPA using
                        React, Redux, TypeScript.
                        Knowledge in user interface,
                        testing, and debugging processes. I
                        improving my skills in this direction
                        and plan to expand them with new
                        technologies, such as Angular.
                        I usually spend my free time
                        reading IT-literature (M.Fauler),
                        Codewars and improving my
                        English. Open to your suggestions</p>
                </div>
            </div>
        </div>
    );
};

export default About;