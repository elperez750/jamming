import { useEffect, useState, useMemo } from "react";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { useTopArtists } from "./useTopArtists";

export function useReccomended() {
  const { accessToken } = useAuth(); 
  const [reccomended, setReccomended] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { topArtists } = useTopArtists();

  const artistIds = useMemo(() => {
    return topArtists?.map((artist: { id: string }) => artist.id) || [];
  }, [topArtists]);

  useEffect(() => {
    if (!accessToken || artistIds.length === 0) {
      setLoading(false);
      setError("Missing access token or artist IDs");
      return;
    }

    const MAX_RETRIES = 3;
    let retryCount = 0;

    const fetchReccomended = async () => {
      if (retryCount >= MAX_RETRIES) {
        setError("Max retries reached. Please try again later.");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching recommended tracks... Attempt:", retryCount + 1);

        const response = await axios.get(
          "https://api.spotify.com/v1/recommendations",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              seed_artists: artistIds.join(","), 
              limit: 5,
            },
          }
        );

        if (response.data && response.data.tracks) {
          setReccomended(response.data.tracks);
          setError(null); // Clear any existing error
        } else {
          setError("No tracks found in response");
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 429) {
            const retryAfter = parseInt(error.response.headers['retry-after'], 10) || 1;
            retryCount++;
            console.log(`Rate limited. Retrying after ${retryAfter} seconds.`);
            setTimeout(fetchReccomended, retryAfter * 1000); // Retry after the suggested time
          } else {
            setError(error.response?.data?.error?.message || error.message);
            setLoading(false);
          }
        } else {
          setError("An unexpected error occurred.");
          setLoading(false);
        }
      } finally {
        if (retryCount === 0) {
          setLoading(false);
        }
      }
    };

    fetchReccomended();
  }, [accessToken, artistIds]); 

  return { reccomended, loading, error };
}
