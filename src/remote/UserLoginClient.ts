import axios from 'axios'

export const apiLogin = axios.create({
    baseURL: 'http://34.204.95.218:8888',
    headers: {
        'content-type': 'application/json'
    },
    withCredentials: true
})
