import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {appReducer} from '../reducers/appReducer';
import {skillsReducer} from '../reducers/skillsReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const reducer = combineReducers({
    skills: skillsReducer,
    app: appReducer
})

export const store = configureStore({
    reducer: reducer
})

export type StateType = ReturnType<typeof reducer>
export type AppDispatchType = typeof store.dispatch

export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector