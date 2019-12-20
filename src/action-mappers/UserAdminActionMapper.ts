import { apiGetAllUsers } from '../remote/UserLogin'

export const userAdminTypes = {
    GET_ALL_USERS: 'DISPLAY_GET_ALL_USERS',
    GET_USER_BY_ID: 'DISPLAY_GET_USER_BY_ID',
    UNAUTHORIZED: 'USER_UNAUTHORIZED_FOR_ENDPOINT',
    SERVER_ERROR: 'SERVER_SIDE_ERROR'
}

export const getAllUsers = () => async (dispatch:any) => {
    try {
        let res = await apiGetAllUsers()
        if (res !== undefined) {
        if ((res.status === 200)) {
            dispatch({
                type: userAdminTypes.GET_ALL_USERS,
                payload: {
                    user: res.body
                }
            })
        } else if (res.status === 401) {
            dispatch({
                type: userAdminTypes.UNAUTHORIZED,
                payload: {
                    message: 'You are unauthorized for this endpoint'
                }
            })
        } }
        else {
            dispatch({
                type: userAdminTypes.SERVER_ERROR,
                payload: {
                    message: 'Something went wrong!'
                }
            })
        } 
    }catch(e) {
        dispatch({
            type: userAdminTypes.SERVER_ERROR,
            payload: {
                message: 'Something went wrong!'
            }
        })
    }
}