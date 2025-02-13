import { apiGetAllUsers, apiGetAllReimbursements, apiSaveOneUser, apiSubmitReimbursement, apiGetUserById,apiGetReById, apiGetReByAuth } from '../remote/UserLogin'

export const userAdminTypes = {
    GET_ALL_USERS: 'DISPLAY_GET_ALL_USERS',
    GET_USER_BY_ID: 'DISPLAY_GET_USER_BY_ID',
    GET_ALL_REIMBURSEMENTS: 'DISPLAY_GET_ALL_REIMBURSEMENTS',
    UNAUTHORIZED: 'USER_UNAUTHORIZED_FOR_ENDPOINT',
    SERVER_ERROR: 'SERVER_SIDE_ERROR',
    SAVE_ONE_USER: 'SUBMIT_GET_ONE_USER',
    SAVE_ONE_REIMBURSEMENT: 'SUBMIT_ONE_REIMBURSEMENT',
    GET_RE_BY_ID: 'RETURN_ID_RE',
    GET_RE_BY_AUTH: 'RETURN_AUTH_RE'
}

export const getReByAuth = (reAuth: number) => async (dispatch:any) => {
    try {
        let res = await apiGetReByAuth(reAuth)
        if (res.status === 200) {
            dispatch({
                type: userAdminTypes.GET_RE_BY_AUTH,
                payload: {
                    reByAuth: res.body
                }
            })
        }
    } catch (e) {
        dispatch({
            type: userAdminTypes.SERVER_ERROR,
            payload: {
                message: 'Something went wrong!'
            }
        })
    }
}
    
export const getReById = (reId: number) => async (dispatch:any) => {
    try {
        let res = await apiGetReById(reId)
        if (res.status === 200) {
            dispatch({
                type: userAdminTypes.GET_RE_BY_ID,
                payload: {
                    reById: res.body
                }
            })
        }
    } catch (e) {
        dispatch({
            type: userAdminTypes.SERVER_ERROR,
            payload: {
                message: 'Something went wrong!'
            }
        })
    }
}
 
export const getUserById = (id: number) => async (dispatch:any) => {
    try {
        let res = await apiGetUserById(id)
        if (res.status === 200) {
            dispatch({
                type: userAdminTypes.GET_USER_BY_ID,
                payload: {
                    userById: res.body
                }
            })
        }
    } catch (e) {
        dispatch({
            type: userAdminTypes.SERVER_ERROR,
            payload: {
                message: 'Something went wrong!'
            }
        })
    }
}

export const submitReimbursement = (reimbursementId: number, author: number, amount: number, description: string, status: number) => async (dispatch: any) => {
    try {
        let res = await apiSubmitReimbursement(reimbursementId, author, amount, description, status)
        if (res.status === 201) {
            dispatch({
                type: userAdminTypes.SAVE_ONE_REIMBURSEMENT,
                payload: {
                    reimbursement: res.body
                }
            })
        }
    } catch (e) {
        dispatch({
            type: userAdminTypes.SERVER_ERROR,
            payload: {
                message: 'Something went wrong!'
            }
        })
    }
}

export const saveOneUser = (name: string, username: string, password: string, userId: number, socialCredit: number, accountBalance: number, role: []) => async (dispatch: any) => {
    try {
        let res = await apiSaveOneUser(userId, name, username, password, socialCredit, accountBalance, role)
        if (res.status === 201) {
            dispatch({
                type: userAdminTypes.SAVE_ONE_USER,
                payload: {
                    newUser: res.body
                }
            })
        } else if (res.status === 401) {
            dispatch({
                type: userAdminTypes.UNAUTHORIZED,
                payload: {
                    message: 'You are unauthorized for this endpoint'
                }
            })
        }
    } catch (e) {
        dispatch({
            type: userAdminTypes.SERVER_ERROR,
            payload: {
                message: 'Something went wrong!'
            }
        })
    }
}

export const viewReimbursements = () => async (dispatch: any) => {
    try {
        let res = await apiGetAllReimbursements()
        if (res !== undefined) {
            if ((res.status === 200)) {
                dispatch({
                    type: userAdminTypes.GET_ALL_REIMBURSEMENTS,
                    payload: {
                        reimbursements: res.body
                    }
                })
            } else if (res.status === 401) {
                dispatch({
                    type: userAdminTypes.UNAUTHORIZED,
                    payload: {
                        message: 'You are unauthorized for this endpoint'
                    }
                })
            }
        }
    } catch (e) {
        dispatch({
            type: userAdminTypes.SERVER_ERROR,
            payload: {
                message: 'Something went wrong!'
            }
        })
    }
}

export const getAllUsers = () => async (dispatch: any) => {
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
            }
        }
    } catch (e) {
        dispatch({
            type: userAdminTypes.SERVER_ERROR,
            payload: {
                message: 'Something went wrong!'
            }
        })
    }
}