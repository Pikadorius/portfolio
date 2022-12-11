import React from 'react';
import s from './Skills.module.css'
import Skill from './Skill/Skill';
import reactPng from '../../../assets/icons/react.png'
import reduxPng from '../../../assets/icons/redux.png'
import htmlPng from '../../../assets/icons/html.png'

type SkillsType = {
    id: string
}

const Skills = (props: SkillsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.skillsCard}>
                <div className={s.skillsCardName} id={props.id}><span>My skills</span></div>
                <div className={s.skillsField}>
                    <Skill logo={reactPng} title={'React'}
                           description={'Functional and class components. TDD. Hooks and HOCS. loaasdasd asdsa dad asdsa dsa dsa das das dsa d' +
                               'as dsa dsa dsa dsa das das dsa '}/>
                    <Skill logo={reduxPng} title={'Redux'} description={'Store, state, reducers and action.'}/>
                    <Skill logo={htmlPng} title={'HTML/CSS'} description={'You can see what i can do here.'}/>
                    <Skill logo={htmlPng} title={'HTML/CSS'} description={'You can see what i can do here.'}/>
                    <Skill logo={htmlPng} title={'HTML/CSS'} description={'You can see what i can do here.'}/>
                    <Skill logo={htmlPng} title={'HTML/CSS'} description={'You can see what i can do here.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;