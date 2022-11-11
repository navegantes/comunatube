import React from "react";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import config from "../src/config/myconfig.json";

function HomePage() {
  const estilosDaHomepage = {
    // backgroundColor: "red"
  };
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  // const valorDoFiltro = "";

  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "red",
      }}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <StyledBanner bg={config.banner} />
        <Header />
        <TimeLine
          searchValues={valorDoFiltro}
          playlists={config.playlists}
        >
          Conteúdo
        </TimeLine>
      </div>
    </>
  )
}

export default HomePage

const StyledBanner = styled.div`
  width: 95%;
  height: 300px;
  margin: 56px auto 0;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position-y: -50px;

  /* img {
    margin-top: 50px;
    min-width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: 0px -50px;
  } */
`;

// function Banner() {
//   return <StyledBanner bg={config.banner} />
//   {/* <img src={`./${config.banner}`} /> */ }
//   //   </StyledBanner>
//   // )
// }

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
    margin-top: -30px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 16px 0;
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

        <audio src={config.audio} controls />

      </section>
    </StyledHeader>
  )
}

function TimeLine({ searchValues, ...props }) {
  const playlistsNames = Object.keys(props.playlists)

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          <section key={playlistName}>
            <div className="header">
              <img src={videos[0].profile} />
              <h2>{playlistName}</h2>
            </div>
            <div className="playlist">
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValuesNormalized = searchValues.toLowerCase();
                return titleNormalized.includes(searchValuesNormalized)
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url} target="_blank">
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
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

