import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { AvatarContainer } from '../styles/styled'
import avatar from '../images/avatar.jpg'
import { graphql, useStaticQuery } from 'gatsby'
import { AboutMe } from '../components/AboutMe'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MainQuery {
      site {
        siteMetadata {
          titles {
            generalTitle
          }
        }
      }
    }
  `)

  const {
    titles: { generalTitle },
  } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title="Max Blog" />
      <AvatarContainer>
        <section>
          <div className="image-container">
            <img src={avatar} alt="" />
          </div>
          <h1>Max Vashchenko</h1>
          <h3 dangerouslySetInnerHTML={{ __html: generalTitle }} />
        </section>
      </AvatarContainer>
      <AboutMe />
    </Layout>
  )
}

export default IndexPage
