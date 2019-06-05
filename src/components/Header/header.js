import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { HeaderWrapper } from './styled'

const Header = ({ siteTitle, blogTitle }) => (
  <HeaderWrapper>
    <Link to="/">{siteTitle}</Link>
    <Link to="/blog">{blogTitle}</Link>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
