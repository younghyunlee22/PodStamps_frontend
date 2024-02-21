import { useState, useEffect } from 'react';
import axios from 'axios';

const useEpisodeInfo = (link) => {
    const [episodeInfo, setEpisodeInfo] = useState(null);

    useEffect(() => {
        const fetchEpisodeInfo = async () => {
            const spotifyId = new URL(link).pathname.split('/').pop();
            if (!link.includes('spotify')) return;

            try {
                const response = await axios.get(
                    `https://api.spotify.com/v1/episodes/${spotifyId}?market=US`,
                    {
                        headers: {
                            Authorization: 'Bearer BQBEMeJldGZCmgiV-7Ub7bB5x4mVuD1x9v-_oBWVaP6tlXDIo8A94eIfzOpfTZAozbgI2HKHdsXSOiUej2FwYkNwsFS6PpVart_X9TVBZ24iz8cs-W4',
                        },
                    }
                );
                console.log(response.data)
                setEpisodeInfo(response.data);
            } catch (err) {
                console.log(`${err.message} link: ${link}`);
            }
        };

        fetchEpisodeInfo();
    }, [link]);

    return episodeInfo;
};

export default useEpisodeInfo;

// {audio_preview_url: 'https://podz-content.spotifycdn.com/audio/clips/3k8tKtgnlU2RkuK67BfjXC/clip_1528538_1571372.mp3', description: 'This week, A Thousand and One producer and Emmy wi…s: podcastchoices.com/adchoicesNPR Privacy Policy', duration_ms: 3174739, explicit: false, external_urls: {…}, …}
// audio_preview_url
//     :
//     "https://podz-content.spotifycdn.com/audio/clips/3k8tKtgnlU2RkuK67BfjXC/clip_1528538_1571372.mp3"
// description
//     :
//     "This week, A Thousand and One producer and Emmy winner Lena Waithe joins panelists Adam Burke, Negin Farsad, and Maz Jobrani to talk Blockbuster, Jennifer Aniston, and Guy Fieri. Learn more about sponsor message choices: podcastchoices.com/adchoicesNPR Privacy Policy"
// duration_ms
//     :
//     3174739
// explicit
//     :
//     false
// external_urls
//     :
// {spotify: 'https://open.spotify.com/episode/59v1LmgmajUIAqXITdpz95'}
// href
//     :
//     "https://api.spotify.com/v1/episodes/59v1LmgmajUIAqXITdpz95"
// html_description
//     :
//     "This week, A Thousand and One producer and Emmy winner Lena Waithe joins panelists Adam Burke, Negin Farsad, and Maz Jobrani to talk Blockbuster, Jennifer Aniston, and Guy Fieri. <br /><br />Learn more about sponsor message choices: <a href=\"https://podcastchoices.com/adchoices\" rel=\"nofollow\">podcastchoices.com/adchoices</a><br /><br /><a href=\"https://www.npr.org/about-npr/179878450/privacy-policy\" rel=\"nofollow\">NPR Privacy Policy</a>"
// id
//     :
//     "59v1LmgmajUIAqXITdpz95"
// images
//     :
//     (3) [{…}, {…}, {…}]
// is_externally_hosted
//     :
//     false
// is_playable
//     :
//     true
// language
//     :
//     "en"
// languages
//     :
//     ['en']
// name
//     :
//     "WWDTM: Lena Waithe"
// release_date
//     :
//     "2024-02-10"
// release_date_precision
//     :
//     "day"
// show
//     :
// {available_markets: Array(66), copyrights: Array(0), description: "NPR's weekly news quiz hosted by Peter Sagal. Have…ning. Learn more at https://plus.npr.org/waitwait", explicit: false, external_urls: {…}, …}
// type
//     :
//     "episode"
// uri
//     :
//     "spotify:episode:59v1LmgmajUIAqXITdpz95"