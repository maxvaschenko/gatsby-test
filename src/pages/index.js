import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { AvatarContainer } from './styled'
import avatar from '../images/avatar.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Max Blog" />
    <AvatarContainer>
      <section>
        <div className="image-container">
          <img src={avatar} alt="" />
        </div>
        <h1>Max Vashchenko</h1>
        <h3>
          Frontend developer at{' '}
          <a href="https://www.linkedin.com/company/devmaticcompany/about/">Devmatic</a>. Author of{' '}
          <a href="https://t.me/smart_dev">@smart_dev</a>,{' '}
          <a href="https://www.instagram.com/frontenders_notes/">frontenders_notes</a> Instagram
          blog and{' '}
          <a href="https://www.youtube.com/channel/UCd63YBqE1I_tedyuYATmz6Q">Youtube channel</a>
        </h3>
      </section>
    </AvatarContainer>
  </Layout>
)

export default IndexPage
