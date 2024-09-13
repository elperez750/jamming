import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";


export function useTopTracks() {
    const { accessToken } = useAuth();
    const [topTrack, setTopTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!accessToken) {
            setLoading(false);
            setError("No access token available");
            return;
        }

        const fetchTopTracks = async () => {
            try {
                const response = await axios.get(
                    "https://api.spotify.com/v1/me/top/tracks?limit=5",
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                setTopTracks(response.data.items);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setError(error.response?.data?.error?.message || error.message);
                } else {
                    setError("An unexpected error occurred.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchTopTracks();
    }, [accessToken]);


    return { topTrack, loading, error };
}