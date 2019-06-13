import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { HeaderWrapper } from './styled'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from 'react-toggle'

const Index = ({ siteTitle, blogTitle }) => (
  <HeaderWrapper>
    <Link to="/">{siteTitle}</Link>
    <div className="theme-toggler">
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <Toggle
              defaultChecked={theme || localStorage.getItem('theme') === 'dark'}
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            />
          </label>
        )}
      </ThemeToggler>
      <Link to="/blog">{blogTitle}</Link>
    </div>
  </HeaderWrapper>
)

Index.propTypes = {
  siteTitle: PropTypes.string,
}

Index.defaultProps = {
  siteTitle: ``,
}

export default Index
