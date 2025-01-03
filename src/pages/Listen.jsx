import { useState } from "react";
import SpotifyPlayer from "../components/SpotifyPlayer.jsx";
import useAuth from "../hooks/useAuth.js";

const Listen = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  function handleShowPlayer() {
    setShowPlayer(true);
  }

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ padding: "20px" }}
    >
      <h1>Listen</h1>
      <h2>Spotify Player</h2>
      <p> Click on the button to see an example!</p>
      <button className="btn" onClick={handleShowPlayer}>
        Add a player
      </button>
      {showPlayer && (
        <SpotifyPlayer link="https://open.spotify.com/embed/episode/59v1LmgmajUIAqXITdpz95/?t=300" />
      )}
      <div style={{ padding: "20px" }}>
        Sign in to Spotify if you would like to search a Podcast.
      </div>
    </div>
  );
};

export default Listen;
