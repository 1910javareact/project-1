import { combineReducers } from 'redux'
import { User } from '../models/user'
import { loginReducer } from './LoginReducer'
import { userAdminReducer } from './UserAdminReducer'

export interface ILoginState  {
    user:User
}

export interface IUserAdminState {
    users:User[]
}
export interface IState {
    login: ILoginState
    users: IUserAdminState
}

export const state = combineReducers<IState>({
    login: loginReducer,
    users: userAdminReducer
})