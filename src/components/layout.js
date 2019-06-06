import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Index from './Header'
import { Footer } from './Footer'
import './layout.css'
import { GlobalStyles } from '../styles/global'

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          titles {
            blogTitle
            copyright
          }
        }
      }
    }
  `)

  const {
    title,
    titles: { blogTitle, copyright },
  } = data.site.siteMetadata

  return (
    <>
      <GlobalStyles />
      <Index siteTitle={title} blogTitle={blogTitle} />
      <main>{children}</main>
      <Footer copyright={copyright} />
    </>
  )
}
