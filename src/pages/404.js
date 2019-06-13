import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { NotFoundContainer } from '../styles/styled'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundContainer>
      <p>OOPS! PAGE NOT FOUND</p>
      <h1>404</h1>
      <p>we are sorry, but the page you requested was not found</p>
      <p className="link-wrapper">
        <Link to="/">Back to homepage</Link>
      </p>
    </NotFoundContainer>
  </Layout>
)

export default NotFoundPage
