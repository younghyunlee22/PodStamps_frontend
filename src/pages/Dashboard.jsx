import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import EpisodeSearchResult from "../components/EpisodeSearchResult.jsx";

const spotifyApi = new SpotifyWebApi({
  clientId: import.meta.env.VITE_REACT_APP_CLIENT_ID,
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // each request takes different time to complete from each other
  // so every time we change our search or accessToken,
  // we want to cancel this request and make a new one

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchShows(search).then((res) => {
      console.log(res);
      if (cancel) return;
      setSearchResults(
        res.body.shows.items.map((show) => {
          const smallestImage = show.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image;
            return smallest;
          }, show.images[0]);

          return {
            title: show.name,
            uri: show.uri,
            albumUrl: smallestImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "80vh",
        width: "80wh",
      }}
    >
      <h1>Search Shows</h1>
      <p>
        For example, type 'wait' and see 'Wait Wait... Don't Tell Me!' show up
        in the result.
      </p>
      <p>Playing a podcast featured will be developed in the future.</p>
      <Form.Control
        type="search"
        placeholder="Search Shows"
        value={search}
        style={{ width: "80%" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map((show) => (
          <EpisodeSearchResult show={show} key={show.uri} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
