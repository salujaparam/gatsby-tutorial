import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function products({ data }) {
  console.log(data)
  return (
    <Layout>
      <Link to="/">Go bac to home page</Link>
      <h2>Our Projects</h2>
      {data.products.edges.map(({ node: product }) => {
        return (
          <div key={product.id} style={{ padding: "1rem", margin: "1rem 0" }}>
            <Img fixed={product.image.fixed} />
            <h3 style={{ marginBottom: "0.5rem" }}>
              {product.title}{" "}
              <span style={{ color: "grey", marginLeft: "2rem" }}>
                ${product.price}
              </span>
            </h3>
            {/* <p>{product.description.description}</p> */}
            <Link to={`/products/${product.title}`}>
              <h4>Details</h4>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    products: allContentfulProduct {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
