import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { HeaderWrapper } from './styled'

const Index = ({ siteTitle, blogTitle }) => (
  <HeaderWrapper>
    <Link to="/">{siteTitle}</Link>
    <Link to="/blog">{blogTitle}</Link>
  </HeaderWrapper>
)

Index.propTypes = {
  siteTitle: PropTypes.string,
}

Index.defaultProps = {
  siteTitle: ``,
}

export default Index
