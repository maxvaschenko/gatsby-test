import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import inDevImage from '../images/in-dev.gif'
import { BlogWrapper } from './styled'

const Blog = () => (
  <>
    <Layout>
      <BlogWrapper>
        <SEO title="Blog" />
        <h1>Hello. Blog now is in development. Keep for updates</h1>
        <div className="image-wrapper">
          <img src={inDevImage} alt=""/>

        </div>
        <Link to="/">Go back home</Link>
      </BlogWrapper>
    </Layout>
  </>
)

export default Blog
