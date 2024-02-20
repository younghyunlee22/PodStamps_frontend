// import svg as a image
import SpotifyLogo from '../../public/images/spotifylogo.svg';
// import svg as a react component
// import SpotifyLogoSvg from '../../public/images/spotifylogo.svg?react'

const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000/callback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-playback-position`;
const SignIn = () => {
    return (
        <div className="d-flex flex-row justify-content-center align-content-center">
            <h1>Login with Spotify</h1>
            <img src={SpotifyLogo} width="800px" alt="spotify-logo"/>
            <a className="btn btn-primary" href={AUTH_URL}>Login with Spotify</a>
        </div>
    )
}

export default SignIn;