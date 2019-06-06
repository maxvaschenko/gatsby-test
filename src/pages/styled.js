import styled from 'styled-components'

export const AvatarContainer = styled.div`
  background-color: #f5f8fa;
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
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 50%;
    }
  }
  h1 {
    padding-bottom: 0.3em;
  }
  h3 {
    color: #aaa;
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
  height: calc(100vh - 5em);
  h1{
        padding: 1em .5em 2em .5em;
  }
  .image-wrapper{
    width: max-content;
    padding-bottom: 2em;
  }
    @media (min-width: 320px) and (max-width: 480px){
  .image-wrapper{
    width: 100%;
  }
  }
`
