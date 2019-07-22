import React from 'react'
import { ButtonWrapper } from './styled'

export const Button = ({ title, onClick }) => (
  <ButtonWrapper>
    <span onClick={onClick}>{title}</span>
  </ButtonWrapper>
)
