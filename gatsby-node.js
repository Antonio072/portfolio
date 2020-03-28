
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    
    const result = await graphql(`
    {
        allEducationJson {
          edges {
            node {
              slug
            }
          }
        }
      }
      
    `)
    console.log(result);
    
    result.data.allEducationJson.edges.forEach(element => {
        
        const { node } = element
        console.log(node);
        
        actions.createPage({
             path: node.slug,
             component: path.resolve('./src/components/template.js'),
             contest:{
                 slug: node.slug
             }
         })
    });


    actions.createPage({
        path: 'dummy',
        component: path.resolve('./src/components/template.js')
    })
}