import { graphql } from "gatsby"

exports.createPages = async ({graphql, actions}) => {
    actions.createPage({
        path: 'dummy',
        component: "template"
    })
}