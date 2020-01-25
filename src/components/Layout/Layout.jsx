import React from "react"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
