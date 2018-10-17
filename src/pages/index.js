import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image';

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hey folks!</h1>
    <Image
      style={{ width: '400px' }}
      fluid={data.file.childImageSharp.fluid}
    />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  {
    file(relativePath: {eq:"gatsby-icon.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default IndexPage
