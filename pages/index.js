import styled from "styled-components";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomepage = { 
    // backgroundColor: "red"
  };


  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "red",
      }}>
        <Menu />
        <Banner />
        <Header />
        <TimeLine playlists={config.playlists} >
          Conteúdo
        </TimeLine>
      </div>
    </>
  )
}

export default HomePage

const StyledBanner = styled.div`
  width: 95%;
  margin: 0 auto;

  img {
    margin-top: 50px;
    min-width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: 0px -50px;
  }
`;

function Banner() {
  return (
    <StyledBanner>
      <img src={`./${config.banner}`} />
    </StyledBanner>
  )
}

// function Menu() {
//   return (
//     <div>
//       Menu
//     </div>
//   )
// }

const StyledHeader = styled.div`
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 10px solid white;
  }
  .user-info {
    margin-top: -50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {`${config.name} (${config.github})`}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function TimeLine(props) {
  const playlistsNames = Object.keys(props.playlists)

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <spam>
                      {video.title}
                    </spam>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
