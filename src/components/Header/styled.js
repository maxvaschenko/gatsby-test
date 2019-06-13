import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: var(--borderColor);
  padding: 0 2em;
  margin: 0;
  .theme-toggler {
    display: flex;
    align-items: center;
    label {
      margin-right: 0.6em;
      margin-top: 0.4em;
    }
  }
  a {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.8em;
    font-weight: 700;
    text-decoration: none;
    color: var(--textLink);
  }
`
