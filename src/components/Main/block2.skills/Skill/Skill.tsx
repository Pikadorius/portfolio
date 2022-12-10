import React from 'react';
import s from './Skill.module.css'

type SkillType = {
    logo: string
    title: string
    description: string
}

const Skill: React.FC<SkillType> = (props) => {
    return (
        <div className={s.skillCard}>
            <div className={s.logo}><img src={props.logo} alt={'logo'}/></div>
            <div className={s.skillTitle}>{props.title}</div>
            <div className={s.skillDescription}>{props.description}</div>
        </div>
    );
};

export default Skill;