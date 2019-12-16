import { userLogin } from '../remote/UserLogin'

export const loginTypes = {
    INVALID_CREDENTIALS: 'LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'LOGIN_UNSUCCESSFUL_LOGIN'
}

export const login = (username: string, password: string) => async (dispatch: any) => {
    try {
        let res = await userLogin(username, password)
        if (res.status === 200) {
            dispatch({
                type: loginTypes.SUCCESSFUL_LOGIN,
                payload: {
                    user:res.body
                }
            })
        } else {
            dispatch({
                type:loginTypes.INVALID_CREDENTIALS
            })
        }


    } catch (e) {
        dispatch({
            type: loginTypes.UNSUCCESSFUL_LOGIN
        })
    }
}