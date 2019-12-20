import { IUserAdminState } from '.'
import { userAdminTypes } from '../action-mappers/UserAdminActionMapper'
import { User } from '../models/user'

const initialState: IUserAdminState = {
    users: [new User(0,'','','',0,0,[])]
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

