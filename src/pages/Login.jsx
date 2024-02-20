// import svg as a image
import SpotifyLogo from '../../public/images/spotifylogo.svg';
// import svg as a react component
import SpotifyLogoSvg from '../../public/images/spotifylogo.svg?react'

const Login = () => {
    return (
        <div className="d-flex flex-row justify-content-center align-content-center">
            <h1>Login with Spotify</h1>
            <img src={SpotifyLogo} alt="spotify-logo" />
            <SpotifyLogoSvg />
            <button className="btn btn-primary">Login with Spotify</button>
        </div>
    )
}

export default Login;