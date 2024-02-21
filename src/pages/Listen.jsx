import { useState } from "react";
import SpotifyPlayer from "../components/SpotifyPlayer.jsx";
import useEpisodeInfo from "../hooks/useEpisodeInfo.jsx"; // Updated import


const Listen = () => {
    const [showPlayer, setShowPlayer] = useState(false);
    const episodeInfo = useEpisodeInfo("https://open.spotify.com/episode/59v1LmgmajUIAqXITdpz95?si=eJmhriBKSVijNB8220uhCQ&t=1781&context=spotify%3Ashow%3A0dWpNy3iA6Mm3xYaHB2Zi9");

    function handleShowPlayer() {
        console.log("add a player");
        setShowPlayer(true);
    }

    return (
        <div>
            <h1>Listen</h1>
            <h2>Spotify Player</h2>
            <button className="btn" onClick={handleShowPlayer}>Add a player</button>
            {showPlayer && <SpotifyPlayer link="https://open.spotify.com/embed/episode/59v1LmgmajUIAqXITdpz95/video?utm_source=generator&t=300" />}
            {episodeInfo && (
                <div>
                    <h3>fetched data: {episodeInfo.name}</h3>
                    <p>{episodeInfo.description}</p>
                    <SpotifyPlayer link={`https://open.spotify.com/embed/episode/${episodeInfo.id}/?t=300`} />
                </div>
            )}
        </div>
    );
};

export default Listen;
