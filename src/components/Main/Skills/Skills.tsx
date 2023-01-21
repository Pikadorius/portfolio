import React from 'react';
import s from './Skills.module.css'
import common from '../../../common/commonStyles/Common.module.css'
import Skill from './Skill/Skill';
import {useSelector} from 'react-redux';
import {StateType} from '../../../redux/store';
import {SkillType} from '../../../reducers/skillsReducer';
import Carousel from 'react-material-ui-carousel'
import Borders from '../../../common/Borders/Borders';
import {useWindowSize} from '../../../utils/customHooks';


type SkillsType = {
    id: string
}

const Skills = (props: SkillsType) => {

    const skills = useSelector<StateType, SkillType[]>(state => state.skills)

    const width=useWindowSize()

    const SkillsField = skills.map(skill => {
        return (
                <Skill
                    key={skill.id}
                    logo={skill.logo}
                    title={skill.title}
                    description={skill.description}
                    id={s.id}/>
        )
    })

    if (width < 748) {
        return (
            <section className={common.sectionWrapper}>
                <div className={common.sectionContainer}>
                    <Borders/>
                    <div className={common.sectionName} id={props.id}><span>My skills</span></div>
                    <div className={common.sectionItemsField}>
                        <Carousel className={`${common.carousel} ${s.carousel}`} animation={'slide'}
                                  navButtonsAlwaysVisible={true} stopAutoPlayOnHover={true} indicators={false}>
                            {
                                skills.map((skill=>{
                                    return (
                                        <div key={skill.id} className={s.oneSkillField}>
                                            <Skill logo={skill.logo} title={skill.title} description={skill.description} id={s.id}/>
                                        </div>
                                    )
                                }))
                            }
                        </Carousel>

                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={common.sectionWrapper}>
            <div className={common.sectionContainer}>
                <Borders/>
                <div className={common.sectionName} id={props.id}><span>My skills</span></div>
                <div className={common.sectionItemsField}>
                    <Carousel className={`${common.carousel} ${s.carousel}`} animation={'slide'} navButtonsAlwaysVisible={true} stopAutoPlayOnHover={true} indicators={false}>
                        <div className={s.threeSkillsField}>
                            {SkillsField[0]}
                            {SkillsField[1]}
                            {SkillsField[2]}
                        </div>
                        <div className={s.threeSkillsField}>
                            {SkillsField[3]}
                            {SkillsField[4]}
                            {SkillsField[5]}
                        </div>
                        <div className={s.threeSkillsField}>
                            {SkillsField[6]}
                            {SkillsField[7]}
                            {SkillsField[8]}
                        </div>
                        <div className={s.threeSkillsField}>
                            {SkillsField[9]}
                            {SkillsField[10]}
                            {SkillsField[11]}
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Skills;