import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body, html{
        height: 100%;
    }
  #___gatsby{
    height: 100%;
    & > div {
      height: 100%;
    }
  }
  main{
    height: calc(100% - 3em);
  }
  a{
    text-decoration: none;
        color: #0096cc;
        &:hover{
              color: #006599;
        }
  }
`
