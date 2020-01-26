import React from "react"

import styles from "./postlist.module.css"

import PostCard from "../PostCard/PostCard"

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>John Doe</h1>
      <h4>Travel Blog</h4>
      <div className={styles.center}>
        {posts.map(({ node }, index) => (
          <PostCard key={index} post={node} />
        ))}
      </div>
    </section>
  )
}

export default PostList
