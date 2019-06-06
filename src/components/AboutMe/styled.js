import styled from 'styled-components'

export const AboutMeWrapper = styled.div`
  height: 65%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5em;
  .about-wrapper {
    display: flex;
    width: 60%;
    max-width: 38em;
    section {
      padding-right: 1em;
    }    
  }
  h3 {
    padding-bottom: 0.5em;
  }
  .icons-wrapper {
    a {
      color: #000;
    }
    h5 {
      font-size: 0.875rem;
      font-weight: 500;
      display: flex;
      align-items: center;
          padding-bottom: .3em;
      .icon-wrapper {
        padding-right: 0.3em;
      }
    }
    svg {
      height: auto;
      width: 25px;
    }
  }
  
  @media (min-width: 320px) and (max-width: 480px){
  padding-top: 3em;
    .about-wrapper{
      width: 85%;
      flex-direction: column;
      section {
        padding-right: 0;
        padding-bottom: 2em;
      }
    }
  }
`
