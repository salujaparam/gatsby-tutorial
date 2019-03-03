import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function images({ data }) {
  const images = data.allFile.edges
  return (
    <Layout>
      {images.map(({ node }, index) => {
        return <h4 key={index}>{node.relativePath}</h4>
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`
