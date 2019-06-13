import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
  --bg: white;
  --textNormal: #222;
  --textTitle: #222;
  --textLink: #222;
  --hr: hsla(0, 0%, 0%, 0.2);
  --sectionBg:#f5f8fa;
  --borderColor: rgba(0, 0, 0, 0.125);
  background-color: var(--bg);
}

body.dark {
  -webkit-font-smoothing: antialiased;
  --bg: #282c35;
  --sectionBg: #464950;
  --textNormal: #aaa;
  --textTitle: white;
  --textLink: #0096cc;
  --borderColor: #676767;
  --hr: hsla(0, 0%, 100%, 0.2);
}
html, body {
  margin: 0; height: 100%;
  p, b, ul, h1, h2, h3, h4 {
   color: var(--textNormal);
  }
  b {
    color: var(--textNormal);
  }

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
  }
 
  @media (min-width: 320px) and (max-width: 480px){
      main{
    height: max-content;
  }
  }
`
