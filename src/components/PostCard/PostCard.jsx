import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

import styles from "./postcard.module.css"

const PostCard = ({
  post: {
    excerpt,
    frontmatter: {
      title,
      date,
      author,
      slug,
      image: {
        childImageSharp: { fluid: img },
      },
    },
  },
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={img} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span> by {author}</span> /<span>{date}</span>
          </h6>
          <p>{excerpt}</p>
          <Link to={slug} className={styles.link}>
            read more
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PostCard
