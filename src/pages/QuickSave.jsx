import { useState } from 'react';
import QuickSaveForm from '../components/QuickSaveForm';
import SpotifyPlayer from '../components/SpotifyPlayer';
export default function QuickSave() {
    const [embedLink, setEmbedLink] = useState('');

    // Callback function to set the embed link
    const handleEmbedLink = (link) => {
        setEmbedLink(link);
    };

    return (
        <div>
            <h1>QuickSave</h1>
            <QuickSaveForm onEmbedLink={handleEmbedLink} />
            {embedLink && <SpotifyPlayer link={embedLink} />}
        </div>
    );
}