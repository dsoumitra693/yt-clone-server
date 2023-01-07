//importing the modules
const express = require("express");
const app = express();
require("dotenv").config()
// const apiHandler = require("./apiHandler")
const PORT = process.env.PORT;
const cors = require('cors');
const axios = require("axios");


const BASE_URL = process.env.BASE_URL
const ORIGIN = [process.env.ORIGIN , 'http://127.0.0.1:3000', "http://localhost:3000", ]


const options = {
    params: {
        maxResults: '20'
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

// using the cors
const corsOptions = {
    origin: ORIGIN,
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

// feed 
app.get("/:selectedCatagory", async (req, res) => {
    const { selectedCatagory } = req.params;
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

app.get("/media/video",(req, res)=>{
    res.sendFile(__dirname + "/media/video.mp4")
})

//running the app on PORT number
app.listen(PORT);
