import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import axios from "axios";

export function useRecentSongs() {
  const { accessToken } = useAuth();
  const [recentSongs, setRecentSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken){
        setLoading(false);
        setError("No access token available");
        return
    } 
  
      const fetchRecentSongs = async () => {
        try {
          const response = await axios.get(
            "https://api.spotify.com/v1/me/player/recently-played?limit=4",
            

            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setRecentSongs(response.data.items);
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

      fetchRecentSongs();
    
  }, [accessToken]);

  return { recentSongs, loading, error };
}
