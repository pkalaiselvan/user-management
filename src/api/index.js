const axios = require('axios');

const GET_USERS = 'https://randomuser.me/api/?results=100'

export const getUser = async () => {
    try {
        const response = await axios.get(GET_USERS);
        return response.data
    } catch (error) {
        console.log(error)
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}
