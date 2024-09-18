import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";

export function useSearch(searchTerm: string) {
  const { accessToken } = useAuth();
  const [searchResults, setSearchResults] = useState({
    tracks: [],
    artists: [],
    albums: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Skip fetching if searchTerm is empty or accessToken is unavailable
    if (!searchTerm.trim() || !accessToken) {
      setLoading(false);
      setError("No access token available or empty search term");
      return;
    }


    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            q: searchTerm,
            type: "track,artist,album",
            limit: 10,
          },
        });

        // Destructure data to get tracks, artists, and albums
        const { tracks, artists, albums } = response.data;

        // Update state with search results
        setSearchResults({
          tracks: tracks.items,
          artists: artists.items,
          albums: albums.items,
        });

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

    const delayDebounceFn = setTimeout(() => {
      fetchSearchResults();
    }, 300);

    // Cleanup debounce timer on component unmount or change in dependencies
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, accessToken]);

  return { searchResults, loading, error };
}
