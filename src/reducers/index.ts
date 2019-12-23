import { combineReducers } from 'redux'
import { User } from '../models/user'
import { loginReducer } from './LoginReducer'
import { userAdminReducer, reimbursementReducer, newUserReducer,submitReimbursementReducer, getUserByIdReducer, getReByAuthReducer, getReByIdReducer } from './UserAdminReducer'
import { Reimbursement } from '../models/reimbursement'

export interface ILoginState  {
    user:User
    
}

export interface ISaveUserState{
    newUser: User
}

export interface IGetUserByIdState{
    userById: User
}

export interface ISubmitReimbursementState{
    reimbursement: Reimbursement
}

export interface IUserAdminState {
    users:User[]
    reimbursements: Reimbursement[]
    // newUser: User
}

export interface IGetReByAuth {
    reByAuth: Reimbursement[]
}

export interface IGetReById {
    reById: Reimbursement[]
}

export interface IState {
    login: ILoginState
    users: IUserAdminState
    reimbursements: IUserAdminState
    newUser: ISaveUserState
    reimbursement: ISubmitReimbursementState
    userById:IGetUserByIdState
    reByAuth: IGetReByAuth
    reById: IGetReById
}

export const state = combineReducers<IState>({
    login: loginReducer,
    users: userAdminReducer,
    reimbursements: reimbursementReducer,
    newUser: newUserReducer,
    reimbursement: submitReimbursementReducer,
    userById: getUserByIdReducer,
    reByAuth: getReByAuthReducer,
    reById: getReByIdReducer
})