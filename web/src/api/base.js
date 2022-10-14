import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

console.log(API_URL)

export default axios.create({
    baseURL: `${API_URL}`
})