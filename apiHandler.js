const axios = require("axios");
require("dotenv").config()
const BASE_URL = process.env.BASE_URL

const options = {
    params: {
        maxResults: '100'
    },
    headers: {
        'X-RapidAPI-Key': process.env.XRapidAPIKey,
        'X-RapidAPI-Host': process.env.XRapidAPIHost
    }
};

const apiHandler = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;

}

export default apiHandler