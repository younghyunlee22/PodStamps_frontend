export default function EpisodeSearchResult({ show }) {

    return (
        <div
            className="d-flex m-2 align-items-center"
            style={{ cursor: "pointer" }}
        >
            <img src={show.albumUrl} style={{ height: "64px", width: "64px" }} />
            <div className="ml-3">
                <div>{show.title}</div>
                <div>{show.artist}</div>
            </div>
        </div>
    )
}