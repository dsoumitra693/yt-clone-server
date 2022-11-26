//importing the modules
const express = require("express");
const app = express();
// const apiHandler = require("./apiHandler")
const PORT = 5000;
const cors = require('cors');
const axios = require("axios");

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    params: {
        maxResults: '20'
    },
    headers: {
        'X-RapidAPI-Key': '8f7de1e440msh145f6615b4a38b6p107f55jsn347a8da283e9',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const apiHandler = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;

}

// using the cors
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

// feed 
app.get("/:selectedCatagory", async (req, res) => {
    const { selectedCatagory } = req.params;
    console.log(selectedCatagory)
    try {
        const response = await apiHandler(`search?part=snippet&q=${selectedCatagory}`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)
    }
});
//search
app.get("/search/:searchTerm", async (req, res) => {
    const { searchTerm } = req.params;
    try {
        const response = await apiHandler(`search?part=snippet&q=${searchTerm}`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)
    }
});
//channel related video 
app.get("/channel-video/:channelId", async (req, res) => {
    const { channelId } = req.params;
    try {
        const response = await apiHandler(`search?channelId=${channelId}&part=snippet&order=date`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)
    }
});
//video related video 
app.get("/related-video/:videoId", async (req, res) => {
    const { videoId } = req.params;
    try {
        const response = await apiHandler(`search?part=snippet&relatedToVideo=${videoId}&type=video`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)
    }
});
//video details
app.get("/video/:videoId", async (req, res) => {
    const { videoId } = req.params;
    try {
        const response = await apiHandler(`videos?part=snippet,statistics&id=${videoId}`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)
    }
});
//chennel details
app.get("/channels/:channelId", async (req, res) => {
    const { channelId } = req.params;
    try {
        const response = await apiHandler(`channels?part=snippet&id=${channelId}`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)
    }
});

//running the app on PORT number
app.listen(PORT, () => {
    console.log("Server is running");
});
