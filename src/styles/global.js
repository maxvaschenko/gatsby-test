import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html, body {margin: 0; height: 100%;}
  #___gatsby{
    height: 100%;
    & > div {
      height: 96%;
    }
  }
  main{
    min-height: calc(100% - 3em);
  }
  a{
    text-decoration: none;
        color: #0096cc;
        &:hover{
              color: #006599;
        }
  }
  .blog-post-container{
    max-width: 70%;
  }
  
  blockquote {
    border-left: 3px solid rgba(0,0,0,.84);
    padding-left: 20px;
  }
  @media (min-width: 320px) and (max-width: 480px){
      main{
    height: max-content;
  }
  }
`
