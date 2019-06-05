import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header/header'
import './layout.css'

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          titles {
            blogTitle
          }
        }
      }
    }
  `)

  const {
    title,
    titles: { blogTitle },
  } = data.site.siteMetadata

  return (
    <>
      <Header siteTitle={title} blogTitle={blogTitle} />
      <main>{children}</main>
      <footer />
    </>
  )
}
