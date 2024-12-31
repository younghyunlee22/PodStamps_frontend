import { useState } from "react";
import QuickSaveForm from "../components/QuickSaveForm";
import SpotifyPlayer from "../components/SpotifyPlayer";
export default function QuickSave() {
  const [embedLink, setEmbedLink] = useState("");

  // Callback function to set the embed link
  const handleEmbedLink = (link) => {
    setEmbedLink(link);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ paddingBottom: "20px" }}>QuickSave</h1>
      <QuickSaveForm onEmbedLink={handleEmbedLink} />
      {embedLink && <SpotifyPlayer link={embedLink} />}
    </div>
  );
}
