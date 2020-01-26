import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import styles from "./postTemplate.module.css"

import Layout from "../../components/Layout/Layout"
import ImageCredit from "../../components/ImageCredit/ImageCredit"

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        author
        imageAuthorURL
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`

const PostTemplate = ({
  data: {
    mdx: {
      frontmatter: {
        title,
        date,
        author,
        imageAuthorURL,
        image: {
          childImageSharp: { fluid: img },
        },
      },
      body,
    },
  },
}) => {
  return (
    <Layout>
      <section className={styles.template}>
        <Link to="/" className={styles.link}>
          back to all posts
        </Link>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>
        <div className={styles.image}>
          <Image fluid={img} />
          <span>
            Image by @ &nbsp;
            <ImageCredit author={author} authorURL={imageAuthorURL} />
          </span>
        </div>
        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </Layout>
  )
}

export default PostTemplate
