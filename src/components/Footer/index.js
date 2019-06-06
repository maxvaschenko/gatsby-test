import PropTypes from 'prop-types'
import React from 'react'
import { FooterWrapper } from './styled'

export const Footer = ({ copyright }) => (
  <FooterWrapper>
    <h2>{copyright}</h2>
  </FooterWrapper>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}
