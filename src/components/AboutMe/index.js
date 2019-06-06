import React from 'react'
import { AboutMeWrapper } from './styled'
import { graphql, useStaticQuery } from 'gatsby'
import { FaLinkedin, FaFacebook, FaTelegramPlane, FaGithub } from 'react-icons/fa'

export const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      site {
        siteMetadata {
          titles {
            aboutMe
          }
        }
      }
    }
  `)

  const {
    titles: { aboutMe },
  } = data.site.siteMetadata

  return (
    <AboutMeWrapper>
      <div className="about-wrapper">
        <section>
          <h3>About me</h3>
          <p dangerouslySetInnerHTML={{__html: aboutMe}}>

          </p>
        </section>
        <section>
          <h3>Contact</h3>
          <div className="icons-wrapper">
            <a href="https://www.linkedin.com/in/maxvashchenko/">
              <h5>
                <div className="icon-wrapper">
                  <FaLinkedin />
                </div>
                <span>LinkedIn</span>
              </h5>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100006076749205">
              <h5>
                <div className="icon-wrapper">
                  <FaFacebook />
                </div>
                <span>Facebook</span>
              </h5>
            </a>
            <a href="https://t.me/m_vash">
              <h5>
                <div className="icon-wrapper">
                  <FaTelegramPlane />
                </div>
                <span>Telegram</span>
              </h5>
            </a>
            <a href="https://github.com/maxvaschenko">
              <h5>
                <div className="icon-wrapper">
                  <FaGithub />
                </div>
                <span>Github</span>
              </h5>
            </a>
          </div>
        </section>
      </div>
    </AboutMeWrapper>
  )
}
