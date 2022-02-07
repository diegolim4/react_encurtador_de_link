const axios = require('axios')

const key = 'cf4544e59effa73107937c440769fef3582f8388'


const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api
