const express = require("express")
const router = express.Router()
const apiHandler = require("../apiHandler")

//video related video 
router.get("/related/:videoId", async (req, res) => {
    const { videoId } = req.params;
    try {
        const response = await apiHandler(`search?part=snippet&relatedToVideo=${videoId}&type=video`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)
    }
});
//channel related video 
router.get("/video/:channelId", async (req, res) => {
    const { channelId } = req.params;
    try {
        const response = await apiHandler(`search?channelId=${channelId}&part=snippet&order=date`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)
    }
});
//video details
router.get("/:videoId", async (req, res) => {
    const { videoId } = req.params;
    try {
        const response = await apiHandler(`videos?part=snippet,statistics&id=${videoId}`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)

    }
});

module.exports = router