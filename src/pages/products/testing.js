import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"

export default function testing() {
  return (
    <Layout>
      <h1>Hello from testing</h1>
      <Link to="/">Home Page</Link>
    </Layout>
  )
}
