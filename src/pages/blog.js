import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

const Blog = () => (
  <>
    <Layout>
      <SEO title="Blog" />
      <h1>Welcome blog</h1>
      <Link to="/">Go back home</Link>
    </Layout>
  </>
)

export default Blog
