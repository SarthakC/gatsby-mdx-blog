import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"

export default () => (
  <div>
    <Layout>
      Hello World
      <div>
        <Link to="/post/">Post Page</Link>
      </div>
    </Layout>
  </div>
)
