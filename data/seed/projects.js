exports.seed = function(knex) {
    return knex('projects').del()
    .then(function() {
        return knex('projects').insert([
            { project_name: 'Awesome Project', url: 'https://awesome-project.com'},
            { project_name: 'Cool Project', url: 'https://cool-project.com'},
            { project_name: 'Amazing Project', url: 'https://amazing-project.com'},
            { project_name: 'Fun Project', url: 'https://fun-project.com'},
            { project_name: 'Super Project', url: 'https://super-project.com'}
        ])
    })
}