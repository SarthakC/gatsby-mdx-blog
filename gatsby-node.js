exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      allMdx: { edges: posts },
    },
  } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  posts.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        path: slug,
        component: require.resolve(
          "./src/templates/post-template/post-template.jsx"
        ),
        context: {
          slug: slug,
        },
      })
    }
  )
}
