import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import styles from "./postTemplate.module.css"

const PostTemplate = ({ pageContext: { slug } }) => {
  return <div>{slug}</div>
}

export default PostTemplate
