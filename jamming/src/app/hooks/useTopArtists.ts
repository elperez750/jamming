import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";


export function useTopArtists() {
    const { accessToken } = useAuth();
    const [topArtists, setTopArtists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!accessToken) {
            setLoading(false);
            setError("No access token available");
            return;
        }

        const fetchTopArtists = async () => {
            try {
                const response = await axios.get(
                    "https://api.spotify.com/v1/me/top/artists?limit=5",
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                setTopArtists(response.data.items);
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

        fetchTopArtists();
    }, [accessToken]);


    return { topArtists, loading, error };
}