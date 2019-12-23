import { IUserAdminState, ISaveUserState, ISubmitReimbursementState, IGetUserByIdState, IGetReById, IGetReByAuth } from '.'
import { userAdminTypes } from '../action-mappers/UserAdminActionMapper'
import { User } from '../models/user'
import { Reimbursement } from '../models/reimbursement'

const initialState: IUserAdminState = {
    users: [new User(0,'','','',0,0,[])],
    reimbursements: [new Reimbursement(0,0,0,'',0)],
    
}

const saveUserState: ISaveUserState = {
    newUser: new User(0,'','','',0,0,[])
}

const submitReimbursementState: ISubmitReimbursementState = {
    reimbursement: new Reimbursement(0,0,0,'',0)
}

const getUserByIdState: IGetUserByIdState = {
    userById: new User(0,'','','',0,0,[])
}

const getReByIdState: IGetReById = {
    reById: [new Reimbursement(0,0,0,'',0)]
}

const getReByAuthState: IGetReByAuth = {
    reByAuth: [new Reimbursement(0,0,0,'',0)]
}

export const getReByAuthReducer = (state = getReByAuthState, action:any) => {
    switch(action.type){
        case userAdminTypes.GET_RE_BY_AUTH:{
            return {
                ...state,
                reByAuth: action.payload.reByAuth
            }
        } default:
            return state
    }
}
export const getReByIdReducer = (state = getReByIdState, action:any) => {
    switch(action.type){
        case userAdminTypes.GET_RE_BY_ID:{
            return {
                ...state,
                reById: action.payload.reById
            }
        } default:
            return state
    }
}

export const getUserByIdReducer = (state = getUserByIdState, action:any) => {
    switch(action.type){
        case userAdminTypes.GET_USER_BY_ID:{
            return {
                ...state,
                userById: action.payload.userById
            }
        } default:
            return state
    }
}

export const submitReimbursementReducer = (state = submitReimbursementState, action:any) => {
    switch(action.type){
        case userAdminTypes.SAVE_ONE_REIMBURSEMENT:{
            return {
                ...state,
                reimbursement: action.payload.reimbursement
            }
        } default:
            return state
    }
}

export const newUserReducer = (state = saveUserState, action:any) => {
    switch(action.type){
        case userAdminTypes.SAVE_ONE_USER:{
            return{
                ...state,
                newUser: action.payload.newUser
            }
        } default:
            return state
    }
}

export const reimbursementReducer = (state = initialState, action:any) => {
    switch(action.type){
        case userAdminTypes.GET_ALL_REIMBURSEMENTS:{
            return {
                ...state,
                reimbursements: action.payload.reimbursements
            }
        } default: 
            return state
    }
}

export const userAdminReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case userAdminTypes.GET_ALL_USERS:{
            return {
                ...state,
                users: action.payload.user
            }
        }
        default: 
            return state
    }
}

