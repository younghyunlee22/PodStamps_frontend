
function SpotifyPlayer({link}) {
  return (
    <iframe style={{borderRadius: '12px'}} src={link} width="624" height="351" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  );
}

export default SpotifyPlayer;
