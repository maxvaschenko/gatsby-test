import PropTypes from 'prop-types'
import React from 'react'
import { FooterWrapper } from './styled'

export const Footer = ({ copyright }) => {
    const year = new Date().getFullYear()
    return (
        <FooterWrapper>
            <h2>{`© ${year} ${copyright}`}</h2>
        </FooterWrapper>
    )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}
