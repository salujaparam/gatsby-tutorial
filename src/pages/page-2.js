import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/Button"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      <div className="row">
        <div className="col-6">Hello World</div>
        <div className="col-6">Hello World</div>
      </div>
    </div>
    <Button>I'm in page 2</Button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
