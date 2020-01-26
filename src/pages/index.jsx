import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout/Layout"
import PostList from "../components/PostList/PostList"

const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "Do MMMM, YYYY")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default () => {
  const {
    allMdx: { totalCount, edges: posts },
  } = useStaticQuery(query)

  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}
