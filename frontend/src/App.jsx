import './App.css'
import SpotifyPlayer from "./components/SpotifyPlayer"

function App() {

  return (
    <div>
      <h2>Spotify Player test</h2>

      <p>The link with a timestamp using the 'Share from xx:xx' from the mobile app <br />
      works as a regular link but doesn't function properly with an iframe.</p>
      <SpotifyPlayer link={"https://open.spotify.com/episode/59v1LmgmajUIAqXITdpz95?si=bvs_DO7qTl62pNr87i-LwA&context=spotify%3Ashow%3A0dWpNy3iA6Mm3xYaHB2Zi9&t=855"} />

      <p>The link with a timestamp obtained from the 'Embed episode' feature on the website works correctly.</p>
      <SpotifyPlayer link={"https://open.spotify.com/embed/episode/59v1LmgmajUIAqXITdpz95/video?utm_source=generator&t=300"} />

      <p>Just a direct link with an "/embed" route and a query parameter "t" also works.</p>
      <SpotifyPlayer link={"https://open.spotify.com/embed/episode/59v1LmgmajUIAqXITdpz95?t=300"} />

      <p>I found out that the link from the mobile app also works when an "/embed" route is added.
        I can't believe I didn't try this earlier.</p>
      <SpotifyPlayer link={"https://open.spotify.com/embed/episode/59v1LmgmajUIAqXITdpz95?si=bvs_DO7qTl62pNr87i-LwA&context=spotify%3Ashow%3A0dWpNy3iA6Mm3xYaHB2Zi9&t=855"} />

  </div>
  );
}

export default App
