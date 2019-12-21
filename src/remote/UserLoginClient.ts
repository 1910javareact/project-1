import axios from 'axios'

export const apiLogin = axios.create({
    baseURL: 'http://localhost:8888',
    headers: {
        'content-type': 'application/json'
    },
    withCredentials: true
})
