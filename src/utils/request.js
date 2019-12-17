import axios from 'axios'

const request = axios.create({
    baseURL: process.evn.VUE_APP_BASE_URL,
    timeout:12000,
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
})

export default request
