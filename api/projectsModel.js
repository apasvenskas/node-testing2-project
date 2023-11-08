const db = require("../data/db-config")

async function createProject(project){
    const [id] = await db("projects").insert(project)
    return db("projects").where("project_id", id).first()
}

module.exports = {
    createProject
}