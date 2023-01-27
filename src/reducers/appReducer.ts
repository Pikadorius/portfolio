//@ts-ignore
import emailjs from 'emailjs-com';
import {FormType} from '../components/Main/Contacts/Contacts';
import {AppDispatchType} from '../redux/store';

export type StatusType = 'idle' | 'loading' | 'failed'

type InititalAppType = {
    status: StatusType
    error: string | null
}


const initialState: InititalAppType = {
    status: 'idle',
    error: null
}

export const appReducer = (state = initialState, action: ActionType): InititalAppType=> {
    switch (action.type) {
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'SET_ERROR': {
            return {...state, error: action.error}
        }
        default: return state
    }
}
type ActionType = SetStatusType | SetErrorType

type SetStatusType = ReturnType<typeof setStatusAC>
export const setStatusAC = (status:StatusType)=>{
    return {
        type: 'SET_STATUS',
        status
    } as const
}

type SetErrorType = ReturnType<typeof setErrorAC>
export const setErrorAC = (error:string | null)=>{
    return {
        type: 'SET_ERROR',
        error
    } as const
}

export const sendMessage = (data: FormType) => (dispatch: AppDispatchType ) =>{
    dispatch(setStatusAC('loading'))
    emailjs.send("service_5inxgz8", "template_icr9n4h", {...data}, "wwpMrKusJaLhuh4Pj").then(res=>{
        if(res.status===200) {
            dispatch(setStatusAC('idle'))
            dispatch(setErrorAC('Message sent'))
        }
        else {
            dispatch(setStatusAC('failed'))
            dispatch(setErrorAC('Something wrong'))
        }
    }).catch((e)=>{
        dispatch(setStatusAC('failed'))
        dispatch(setErrorAC('Network Error'))
    }).finally(()=>dispatch(setStatusAC('idle')))
}