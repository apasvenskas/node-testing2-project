const request = require("supertest")
const db =require("../data/db-config")
const server = require("../server")
const Project = require("./projectsModel")

const project1 = {project_name: 'Project One', url: 'https://awesome-project1.com'}
const project2 = {project_name: 'Project Two', url: 'https://awesome-project2.com'}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db('projects').truncate()
})

afterAll(async () => {
    await db.destroy()
})

it("correct env var", () => {
    expect(process.env.DB_ENV).toBe("testing")
}) 

describe("Projects model functions", () => {
    describe("create project", () => {
        it("does it add a project to the database", async () => {
            let projects
            await Project.createProject(project1)
            projects = await db('projects')
            expect(projects).toHaveLength(1)

            await Project.createProject(project2)
            projects = await db('projects')
            expect(projects).toHaveLength(2)
        })
        it("inserted project and url", async () => {
            const project = await Project.createProject(project1)
            expect(project).toMatchObject({project_id:1, ...project})
        })
    })
    describe("[DELETE] / delete project ", () => {
        it("removes project from the database", async () => {
           
        })
    })
})