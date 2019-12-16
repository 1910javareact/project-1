import { apiLogin } from './UserLoginClient'

export async function userLogin(username:string, password:string){
    const credentials = {
        username,
        password
    }
    try {
        const response = await apiLogin.post('/login', credentials)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                data: undefined
            }
        }
    } catch(e) {
        console.log(e)
        throw new Error('Something Went Wrong')
    }
} 