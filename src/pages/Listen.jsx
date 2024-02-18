import SpotifyPlayer from "../components/SpotifyPlayer.jsx";
import {useState} from "react";

const Listen = () => {

    const [showPlayer, setShowPlayer] = useState(false);

    function handleShowPlayer() {
        console.log("add a player")
            setShowPlayer(true);

    }
    return (
        <div>
            <h1>Listen</h1>
            <h2>Spotify Player</h2>
            <button onClick={handleShowPlayer}>Add a player</button>
            {showPlayer && <SpotifyPlayer
                link={"https://open.spotify.com/embed/episode/59v1LmgmajUIAqXITdpz95/video?utm_source=generator&t=300"}/>
            }
        </div>
    )
}

export default Listen;