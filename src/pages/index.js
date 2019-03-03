import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from "../components/Button"
import { FaApple } from "react-icons/fa"
import Info from "../components/info"
import Cat from "../components/cat"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/products/">
      <h1>Products Page</h1>
    </Link>
    <Info />
    <Cat />
    <Link to="/images/">images</Link>
    <h1 style={{ color: "blue" }}>Hi Param Saluja</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <FaApple className="icon" />
    <Button>I'm from styled</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/products/testing/">Testing page</Link>
  </Layout>
)

export default IndexPage
