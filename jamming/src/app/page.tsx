"use client";

import { FeaturedPlaylists } from "./components/layout-discover/featuredPlaylists";

import { RecentlyPlayed } from "./components/layout-discover/recentlyPlayed";
import { SearchBar } from "./components/layout-discover/searchBar";
import { useAuth } from "./context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LogOut } from "lucide-react";
import { useUserPlaylists } from "./hooks/useUserPlaylists";
import { useRecentSongs } from "./hooks/useRecentSongs";
import { useReccomended } from "./hooks/useReccomended";
import { TopArtist } from "./components/layout-discover/topArtists";
import { useTopArtists } from "./hooks/useTopArtists";
import { useTopTracks } from "./hooks/useTopTracks";
import { TopTrack } from "./components/layout-discover/topTracks";

export default function Home() {
  const { user, loginWithSpotify, logout } = useAuth();
  const router = useRouter();
  const { playlists } = useUserPlaylists();
  const { recentSongs } = useRecentSongs();
  const { reccomended } = useReccomended();
  const { topArtists } = useTopArtists();
  const { topTrack } = useTopTracks();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");

    if (accessToken) {
      loginWithSpotify(accessToken);
      router.replace("/");
    }
  }, [loginWithSpotify, router]);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user)
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-indigo-950">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Welcome to Jamming
          </h1>
          <div className="flex items-center space-x-4">
            <p className="text-xl font-semibold text-blue-300">
              Hello, <span className="text-cyan-300">{user.name}</span>
            </p>
            <button
              onClick={logout}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-full transition duration-300 flex items-center space-x-2"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="mb-16">
          <SearchBar />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map((playlist: any, idx) => (
              <div key={idx}>
                <FeaturedPlaylists
                  id={idx}
                  name={playlist.name}
                  imageUrl={playlist.images[0].url}
                  tracks={playlist.tracks.total}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Recently Played</h2>
          <div className="bg-blue-800 bg-opacity-50 rounded-lg shadow-lg overflow-hidden">
            {recentSongs.map((song: any, idx) => (
              <RecentlyPlayed
                id={idx}
                songName={song.track.name}
                artistName={song.track.artists[0]?.name}
                imageUrl={song.track.album.images[0]?.url}
                duration={song.track.duration_ms}
              />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Your Top Artists</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {topArtists.map((artist: any, idx) => (
              <TopArtist
                id={idx}
                artistName={artist.name}
                imageUrl={artist.images[0].url}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Your Top Tracks
          </h2>
          <div className="flex spaxe-x-6 overflow-x-auto pb-4">
          {topTrack.map((track: any, idx) => {
              const artistNames = track.artists.map((artist: any) => artist.name).join(", ");
              return (
                <TopTrack
                  id={idx}
                  trackName={track.name}
                  imageUrl={track.album.images[0].url}
                  artistName={artistNames}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
