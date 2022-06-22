const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                ],
            },
        });
    }
};

exports.createPages = async ({ actions: {createPage} , graphql }) => {
    /* Members */
    const membersTemplate = path.resolve('src/templates/MembersTemplate.js');
    const membersQuery = await graphql(`
    query {
        allInitiativesCsv {
            edges {
                node {
                    name
                    slug
                } 
            }
        }
    }
    `);

    const members = membersQuery.data.allInitiativesCsv.edges;

    members.forEach((edge) => {
        createPage({
            path: `/group/${edge.node.slug}`,
            component: membersTemplate,
            context: { slug: edge.node.slug }, // pass as props to component
        });
    });


    // /* Research Topics */
    const topicsQuery = await graphql(`
    query {
        allTopicsJson {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `);

    if (topicsQuery.errors) {
        console.log("Error retrieving data", topicsQuery.errors)
        return
    }
    const topicsTemplate = path.resolve('src/templates/ProjectsTemplate.js');
    const topics = topicsQuery.data.allTopicsJson.edges;

    topics.forEach((edge) => {
        createPage({
            path: `/research/${edge.node.slug}`,
            component: topicsTemplate,
            context: { slug: edge.node.slug }, // pass as props to component
        });
    });
};
