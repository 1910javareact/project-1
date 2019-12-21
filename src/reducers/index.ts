import { combineReducers } from 'redux'
import { User } from '../models/user'
import { loginReducer } from './LoginReducer'
import { userAdminReducer, reimbursementReducer } from './UserAdminReducer'
import { Reimbursement } from '../models/reimbursement'

export interface ILoginState  {
    user:User
}

export interface IUserAdminState {
    users:User[]
    reimbursements: Reimbursement[]
}
export interface IState {
    login: ILoginState
    users: IUserAdminState
    reimbursements: IUserAdminState
}

export const state = combineReducers<IState>({
    login: loginReducer,
    users: userAdminReducer,
    reimbursements: reimbursementReducer
})