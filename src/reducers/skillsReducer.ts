import {v1} from 'uuid';
import reactSvg from '../../src/assets/icons/skills/react.svg'
import htmlSVG from '../../src/assets/icons/skills/HTML5.svg'
import cssSVG from '../../src/assets/icons/skills/CSS3.svg'
import reduxSVG from '../../src/assets/icons/skills/redux.svg'
import tsSVG from '../../src/assets/icons/skills/typescript.svg'
import postmanSVG from '../../src/assets/icons/skills/Postman.svg'
import storySVG from '../../src/assets/icons/skills/storybook.svg'
import apiSVG from '../../src/assets/icons/skills/API.svg'
import muiPNG from '../../src/assets/icons/skills/MUI.png'
import jestPNG from '../../src/assets/icons/skills/jest.svg'
import formikPNG from '../../src/assets/icons/skills/formik.png'
import hookSVG from '../../src/assets/icons/skills/hook.svg'

export type SkillType = {
    logo: string
    title: string
    description: string
    id: string
}

type InitStateType = SkillType[]

const initialState: InitStateType = [
    {id: v1(), description: 'Description about HTML5', logo: htmlSVG, title: 'HTML5'},
    {id: v1(), description: 'Description about CSS3', logo: cssSVG, title: 'CSS3'},
    {id: v1(), description: 'Description about React', logo: reactSvg, title: 'React'},
    {id: v1(), description: 'Description about Redux', logo: reduxSVG, title: 'Redux/RTK'},
    {id: v1(), description: 'Description about TS', logo: tsSVG, title: 'Typescript'},
    {id: v1(), description: 'Description about Postman', logo: postmanSVG, title: 'Postman'},
    {id: v1(), description: 'Description about Storybook', logo: storySVG, title: 'Storybook'},
    {id: v1(), description: 'Description about RestAPI', logo: apiSVG, title: 'Rest API'},
    {id: v1(), description: 'Description about MUI', logo: muiPNG, title: 'Material UI'},
    {id: v1(), description: 'Description about Jest', logo: jestPNG, title: 'Jest'},
    {id: v1(), description: 'Description about Formik/Redux-form', logo: formikPNG, title: 'Formik/Redux-form'},
    {id: v1(), description: 'Description about Hooks', logo: hookSVG, title: 'Hooks'},
]

export const skillsReducer = (state = initialState,): SkillType[] => {
    return state;
}