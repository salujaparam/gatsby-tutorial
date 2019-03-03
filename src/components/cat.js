import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const getCat = graphql`
  {
    file(relativePath: { eq: "bcg/cat1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function cat() {
  return (
    <StaticQuery
      query={getCat}
      render={data => {
        console.log(data)
        return (
          <div style={{ maxWidth: "300px" }}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        )
      }}
    />
  )
}
