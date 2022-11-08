import styled from "styled-components";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

import { ytRequestAPI } from "../src/service/requestServices";

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
        <TimeLine
          channelsList={[
            "UCcoxGCRGcq6FhHbEvr2y9Vg",
            "UCAMExYqcweM7PUebKfmLdFA",
            "UC8tnKW-FN6LdvKazw5RmOOQ",
            "UCC27hiJO_njp6v81Wd0b96g",
            "UC7-Pp09PJX_SYP9oyMzUAtg",
            "UCawkKjxvsJ1oShKVK4xxfJQ",
            "UCETjsiWHrAHyADOih7ACwHw",
            "UCag6nJdH24c2LHRvebYJwRQ"]}
          // playlists={config.playlists}
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
  // const playlistsNames = Object.keys(props.playlists)
  const channelsList = props.channelsList
  const params = {
    "baseUrl": 'https://www.googleapis.com/youtube/v3/search?',
    "query": {
      "key": NEXT_PUBLIC_YT_API_KEY,
      "part": "snippet",
      "channelId": "UCcoxGCRGcq6FhHbEvr2y9Vg",
      "order": "date",
      "maxResults": "10"
    }
  }

  return (
    <StyledTimeline>
      {/* {playlistsNames.map((playlistName) => { */}
      {channelsList.map((channelId) => {
        // const videos = props.playlists[playlistName]
        const videos = props.playlists[playlistName]
        ytRequestAPI(params)
          .then(data => {
            const items = data.items
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
          })
      })}
    </StyledTimeline>
  )
}

