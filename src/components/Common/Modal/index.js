import React from 'react'
import { ModalWrapper } from './styled'
import { Button } from '../Button'
import { Link } from 'gatsby'

export const Modal = ({ changeIsCookieSet }) => {
  return (
    <ModalWrapper>
      <h5>
        By using this website or by clicking on agree, you indicate that you agree with{' '}
        <Link to="/privacy">terms of privacy</Link>, use of cookies and the collection of
        information by My Blog
      </h5>
      <Button title={'Agree'} onClick={changeIsCookieSet} />
    </ModalWrapper>
  )
}
