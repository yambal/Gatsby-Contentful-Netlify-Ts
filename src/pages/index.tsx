import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const TestStyle = styled('div')`
  background-color: red;
  color: white;
`

const IndexPage:React.SFC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <TestStyle>TestStyle</TestStyle>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
