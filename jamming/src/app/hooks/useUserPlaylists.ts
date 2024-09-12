import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import axios from "axios";

export function useUserPlaylists() {
  const { accessToken } = useAuth();
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) return;

    const fetchPlaylists = async () => {
      try {
        // Set the desired limit here
        const limit = 5; // Adjust the limit as needed
        const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: limit, // Pass the limit as a parameter
          },
        });

        setPlaylists(response.data.items);
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

    fetchPlaylists();
  }, [accessToken]);

  return { playlists, loading, error };
}
