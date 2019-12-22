import { apiLogin } from './UserLoginClient'



export async function userLogin(username: string, password: string) {
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
    } catch (e) {
        console.log(e)
        throw new Error('Something Went Wrong')
    }
}

export async function apiSubmitReimbursement(reimbursementId: number, author: number, amount: number, description: string, status: number) {
    const newReimbursementObj = {
        reimbursementId,
        author,
        amount,
        description,
        status
    }
    try {
        console.log(newReimbursementObj)
        const response = await apiLogin.post('/reimbursement/new-reimbursement', newReimbursementObj)
        if (response.status ===201) {
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
    } catch (e) {
        console.log(e)
        throw new Error('Something Went Wrong')
    }
}

export async function apiSaveOneUser(userId: number, name: string, password: string, username: string, socialCredit: number, accountBalance: number, role:[]) {
    const newUserObj = {
        name,
        password, 
        username,
        userId,
        socialCredit,
        accountBalance,
        role
    }
    try {
        const response = await apiLogin.post('/users', newUserObj)
        if (response.status === 201) {
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
    } catch (e) {
        console.log(e)
        throw new Error('Something Went Wrong')
    }
}

export async function apiGetAllReimbursements() {
    try {
        const response = await apiLogin.get('/reimbursement')
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e)
    }
}

export async function apiGetAllUsers() {
    try {
        const response = await apiLogin.get('/users')
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e)
    }
}