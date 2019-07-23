import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { AvatarContainer } from '../styles/styled'
import avatar from '../images/avatar.jpg'
import { graphql, useStaticQuery } from 'gatsby'
import { AboutMe } from '../components/AboutMe'
import { getCookie } from '../utils/cookie'
import { Modal } from '../components/Common/Modal'

const IndexPage = () => {
  const [isCookieSet, changeIsCookieSet] = useState(false)
  useEffect(() => {
    const hasCookie = getCookie('isAgreed')
    if (hasCookie) {
      changeIsCookieSet(true)
    }
  }, [isCookieSet])
  const data = useStaticQuery(graphql`
    query MainQuery {
      site {
        siteMetadata {
          title
          description
          titles {
            generalTitle
          }
        }
      }
    }
  `)

  const {
    title,
    description,
    titles: { generalTitle },
  } = data.site.siteMetadata

  const hideModal = () => {
    changeIsCookieSet(true)
    document.cookie = 'isAgreed=1'
  }

  return (
    <Layout>
      <SEO title={title} description={description} />
      <AvatarContainer>
        {!isCookieSet && <Modal changeIsCookieSet={hideModal} />}
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
