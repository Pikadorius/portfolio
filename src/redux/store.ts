import {configureStore} from '@reduxjs/toolkit';
import {skillsReducer} from '../reducers/skillsReducer';



export const store = configureStore({
    reducer: {
        skills: skillsReducer
    }
})

export type StateType = ReturnType<typeof store.getState>