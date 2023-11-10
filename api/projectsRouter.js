const express =require("express")
const router = express.Router()
const Project = require("./projectsModel")

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const delProject = await Project.deleteProject(id)
    if(Object.keys(delProject).length === 0) {
        return res.status(404).json({errir: "Project not found"})
    }
    res.status(200).json(delProject)
})


module.exports = router