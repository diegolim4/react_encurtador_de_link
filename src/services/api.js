import axios from "axios";


export const key = "796574843113f0bbaa3720f9c693970fc693970f8906b60"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Autorization': `Bearer ${key}`
    }
})

export default api
