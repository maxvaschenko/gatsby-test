import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.125);
  padding: 0 2em;
  margin: 0;
  a {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.8em;
    font-weight: 700;
    text-decoration: none;
    color: #2e2e2e;
  }
`
