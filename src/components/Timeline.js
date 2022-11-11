import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 70vw;
  padding: 16px;
  margin: 0 auto;
  overflow: hidden;
  justify-content: center;

  h2 {
    font-size: 24px;
    /* margin-bottom: 16px; */
    margin-left: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    
    &>.header {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .playlist {
      
      width: 100%; //calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      a {
        scroll-snap-align: start;
        text-decoration: none;
        color: black;
        font-weight: bold;
        margin-bottom: 10px;
        span {
          padding-top: 8px;
          display: block;
          font-size: smaller;
          padding-right: 16px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;