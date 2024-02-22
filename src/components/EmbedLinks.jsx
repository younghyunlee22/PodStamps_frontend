
import { useEffect, useState } from 'react';
import axios from 'axios';
import SpotifyPlayer from './SpotifyPlayer';

const EmbedLinks = () => {
    const [embedLinks, setEmbedLinks] = useState([]);

    useEffect(() => {
        const fetchEmbedLinks = async () => {
            try {
                // Make GET request to fetch embed links from backend
                const response = await axios.get('http://localhost:8000/api/quicksave');
                const { embedLinks } = response.data;

                // Set the embedLinks state with the received data
                setEmbedLinks(embedLinks);
            } catch (error) {
                console.error('Error fetching embed links:', error);
            }
        };

        // Call the fetchEmbedLinks function when the component mounts
        fetchEmbedLinks();
    }, []);

    return (
        <div>
            <h2>Play your PodStamps</h2>
            {embedLinks.map((link, index) => (
                <SpotifyPlayer key={index} link={link} />
            ))}
        </div>
    );
};

export default EmbedLinks;
