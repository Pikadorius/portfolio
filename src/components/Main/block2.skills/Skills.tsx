import React from 'react';
import s from './Skills.module.css'
import Skill from './Skill/Skill';
import reactPng from '../../../assets/icons/react.png'
import reduxPng from '../../../assets/icons/redux.png'
import htmlPng from '../../../assets/icons/html.png'
import {useSelector} from 'react-redux';
import {StateType} from '../../../redux/store';
import {SkillType} from '../../../reducers/skillsReducer';
import Carousel from 'react-material-ui-carousel'


type SkillsType = {
    id: string
}


const Skills = (props: SkillsType) => {

    const skills = useSelector<StateType, SkillType[]>(state => state.skills)

    const SkillsField = skills.map(s => {
        return <Skill key={s.id} logo={s.logo} title={s.title} description={s.description} id={s.id}/>
    })

    const screenWidth = window.screen.width
    console.log(screenWidth)

    if (screenWidth < 748) {
        return (
            <div className={s.wrapper}>
                <div className={s.skillsCard}>
                    <div className={s.skillsCardName} id={props.id}><span>My skills</span></div>
                    <div className={s.skillsField}>
                        <Carousel sx={{width: '50%'}} animation={'slide'} navButtonsAlwaysVisible={true}>
                            {SkillsField}
                        </Carousel>

                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={s.wrapper}>
            <div className={s.skillsCard}>
                <div className={s.skillsCardName} id={props.id}><span>My skills</span></div>
                <div className={s.skillsField}>
                    <Carousel sx={{width: '50%'}} animation={'slide'} navButtonsAlwaysVisible={true}>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            {SkillsField[0]}
                            {SkillsField[1]}
                            {SkillsField[2]}
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            {SkillsField[3]}
                            {SkillsField[4]}
                            {SkillsField[5]}
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            {SkillsField[6]}
                            {SkillsField[7]}
                            {SkillsField[8]}
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            {SkillsField[9]}
                            {SkillsField[10]}
                            {SkillsField[11]}
                        </div>

                    </Carousel>

                </div>
            </div>
        </div>
    );
}

export default Skills;