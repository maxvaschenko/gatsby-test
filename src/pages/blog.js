import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { BlogWrapper } from '../styles/styled'

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              title
              date(formatString: "MMMM DD, YYYY")
              description
              titleImage
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges
  return (
    <>
      <Layout>
        <BlogWrapper>
          <SEO title="Blog" />
          {posts.map(({ node }) => {
            const post = node.frontmatter
            return (
              <a key={post.date} className="blog-post-container" href={post.path}>
                <div className="img-container">
                  <img src={post.titleImage} alt="" />
                </div>
                <div className="descr-container">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <b>{post.date}</b>
                </div>
              </a>
            )
          })}
          <Link to="/">Go back home</Link>
        </BlogWrapper>
      </Layout>
    </>
  )
}

export default Blog
