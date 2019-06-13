import styled from 'styled-components'

export const AvatarContainer = styled.div`
  background-color: var(--sectionBg);
  min-height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 0;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .image-container {
    width: max-content;
    height: max-content;
    img {
      height: auto;
      width: 120px;
      padding: 0.5rem;
      border: 1px solid var(--textNormal);
      border-radius: 50%;
    }
  }
  h1 {
    padding-bottom: 0.3em;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
    width: 60%;
    text-align: center;
    line-height: 1.3em;
  }
`

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: calc(100vh - 5em);
  padding: 2em 0;
  h1 {
    padding: 1em 0.5em 2em 0.5em;
  }
  h3 {
    padding-bottom: 0.2em;
  }
  .blog-post-container {
    width: 85%;
    //margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    .img-container {
      width: 50%;
      max-width: 300px;
      height: max-content;
    }
    &:active,
    &:focus,
    &:visited {
      outline: 0;
      border: none;
      -moz-outline-style: none;
      color: #000;
    }
  }
  .descr-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.5em 1em;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    height: max-content;
    .img-container {
      display: none;
    }
    .blog-post-container {
      max-width: 85%;
      margin-bottom: 1em;
    }
    .descr-container {
      padding: 0;
    }
    h3 {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`

export const NotFoundContainer = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  .link-wrapper {
    padding-top: 1em;
  }
  p {
    font-size: 0.9em;
    font-weight: 800;
  }
  h1 {
    font-size: 16em;
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 12em;
    }
    p {
      font-size: 0.7em;
      font-weight: 800;
      max-width: 80%;
      text-align: center;
    }
  }
`
