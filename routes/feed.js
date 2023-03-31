const express = require("express")
const router = express.Router()
const apiHandler = require("./apiHandler")


//Feed
router.get("/:selectedCatagory", async (req, res) => {
    const { selectedCatagory } = req.params;
    try {
        const response = await apiHandler(`search?part=snippet&q=${selectedCatagory}`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)
    }
});
//search
router.get("/search/:searchTerm", async (req, res) => {
    const { searchTerm } = req.params;
    try {
        const response = await apiHandler(`search?part=snippet&q=${searchTerm}`)

        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err)
    }
});

export default router