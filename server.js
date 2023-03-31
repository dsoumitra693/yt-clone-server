//importing the modules
const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT;
const cors = require('cors');
const feedRoutes = require("./routes/feed")
const videoRoutes = require("./routes/video")
const channelRoutes = require("./routes/channel")

const ORIGIN = [process.env.ORIGIN, 'http://127.0.0.1:3000', "http://localhost:3000",]

// using the cors
const corsOptions = {
    origin: ORIGIN,
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use("/", feedRoutes)
app.use("/channel", channelRoutes)
app.use("/video", videoRoutes)


app.get("/media/video", (req, res) => {
    res.sendFile(__dirname + "/media/video.mp4")
})

//running the app on PORT number
app.listen(PORT, () => {
    console.log(`App Running on post ${PORT}`)
});
