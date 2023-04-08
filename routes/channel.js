const express = require("express")
const router = express.Router()
const apiHandler = require("../apiHandler")

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

module.exports = router