import { combineReducers } from 'redux'
import { User } from '../models/user'
import { loginReducer } from './LoginReducer'
import { userAdminReducer, reimbursementReducer, newUserReducer,submitReimbursementReducer } from './UserAdminReducer'
import { Reimbursement } from '../models/reimbursement'

export interface ILoginState  {
    user:User
    
}

export interface ISaveUserState{
    newUser: User
}

export interface ISubmitReimbursementState{
    reimbursement: Reimbursement
}

export interface IUserAdminState {
    users:User[]
    reimbursements: Reimbursement[]
    // newUser: User
}

export interface IState {
    login: ILoginState
    users: IUserAdminState
    reimbursements: IUserAdminState
    newUser: ISaveUserState
    reimbursement: ISubmitReimbursementState
}

export const state = combineReducers<IState>({
    login: loginReducer,
    users: userAdminReducer,
    reimbursements: reimbursementReducer,
    newUser: newUserReducer,
    reimbursement: submitReimbursementReducer
})