import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html, body {margin: 0; height: 100%; overflow: hidden}
  #___gatsby{
    height: 100%;
    & > div {
      height: 96%;
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
