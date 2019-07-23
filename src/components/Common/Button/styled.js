import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  position: relative;

  display: block;
  padding: 0;

  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  background-color: #ecf0f1;
  color: #0b92d1;

  transition: background-color 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #cbcccd;
  }

  & > * {
    position: relative;
  }

  & span {
    display: block;
    padding: 10px 20px;
  }

  &:before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, 0.3);

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  &:active:before {
    width: 120%;
    padding-top: 120%;

    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }

  /* Styles, not important */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    position: relative;
    height: 100%;
  }

  body {
    position: absolute;
    top: 50%;
    left: 50%;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    background-color: #ecf0f1;
    color: #34495e;
    font-family: Trebuchet, Arial, sans-serif;
    text-align: center;
  }

  h2 {
    font-weight: normal;
  }

  &.orange {
    background-color: #e67e22;
  }

  &.orange:hover,
  &.orange:focus {
    background-color: #d35400;
  }

  &.red {
    background-color: #e74c3c;
  }

  &.red:hover,
  &.red:focus {
    background-color: #c0392b;
  }
`
