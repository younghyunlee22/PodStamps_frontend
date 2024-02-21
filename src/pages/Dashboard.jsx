import { useState, useEffect } from "react"
import useAuth from '../hooks/useAuth'
import { Form } from 'react-bootstrap'
import SpotifyWebApi from "spotify-web-api-node"
import EpisodeSearchResult from "../components/EpisodeSearchResult.jsx";

const spotifyApi = new SpotifyWebApi({
    clientId: import.meta.env.VITE_REACT_APP_CLIENT_ID,
})

const Dashboard = ({ code }) => {
    const accessToken = useAuth(code);
    console.log('accessToken', accessToken);
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

     // each request takes different time to complete from each other
    // so every time we change our search or accessToken,
    // we want to cancel this request and make a new one

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchShows(search).then(res => {
            console.log(res)
            if (cancel) return
            setSearchResults(
                res.body.shows.items.map(show => {
                    const smallestImage = show.images.reduce(
                        (smallest, image) => {
                            if (image.height < smallest.height) return image
                            return smallest
                        },
                        show.images[0]
                    )

                    return {
                        title: show.name,
                        uri: show.uri,
                        albumUrl: smallestImage.url,
                    }
                })
            )
        })

        return () => (cancel = true)
    }, [search, accessToken])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: "80vh",
            width: "80wh"
        }}>
            <Form.Control
                type="search"
                placeholder="Search Show/Episode"
                value={search}
                style={{ width: "80%" }}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{overflowY: "auto"}}>
                {searchResults.map(track => (
                    <EpisodeSearchResult
                        track={track}
                        key={track.uri}
                        // chooseTrack={chooseTrack}
                    />
                ))}
            </div>
        </div>
    )
}

export default Dashboard