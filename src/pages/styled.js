import styled from 'styled-components'

export const AvatarContainer = styled.div`
  background-color: #f5f8fa;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  }
`
