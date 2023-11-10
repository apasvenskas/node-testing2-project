const db = require("../data/db-config")

async function createProject(project){
    const [id] = await db("projects").insert(project)
    return db("projects").where("project_id", id).first()
}

async function deleteProject(id) {
    const project = await db("projects").where("project_id", id).first()
    await db("projects").where("project_id", id).del()
    if (!project){
        return []
    }
    return project
}

module.exports = {
    createProject,
    deleteProject
}