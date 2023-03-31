const express = require("express")
const router = express.Router()
const apiHandler = require("./apiHandler")


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

//chennel details
router.get("/:channelId", async (req, res) => {
    const { channelId } = req.params;
    try {
        const response = await apiHandler(`channels?part=snippet&id=${channelId}`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)
    }
});

export default router