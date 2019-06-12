import styled from 'styled-components'

export const BlogPostContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;
  padding: 2em 0;
  p {
    padding: 1em 0;
  }
  h2 {
    font-size: 1.2 rem;
    padding-top: 1em;
  }
  img {
    margin-top: 1em;
  }
  @media only screen and (max-width: 480px) {
    max-width: 90%;
    padding: 1em 0;
    font-size: 1.2rem;
    h1 {
      font-size: 2.2rem;
    }
  }
`
