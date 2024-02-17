import SpotifyPlayer from "../components/SpotifyPlayer.jsx";

const Listen = () => {
    return (
        <div>
            <h1>Listen</h1>
            <h2>Spotify Player</h2>
            <SpotifyPlayer
                link={"https://open.spotify.com/embed/episode/59v1LmgmajUIAqXITdpz95/video?utm_source=generator&t=300"}/>
        </div>
    )
}

export default Listen;