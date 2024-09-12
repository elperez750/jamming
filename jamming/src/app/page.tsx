"use client"

import { FeaturedPlaylists } from "./components/layout-discover/featuredPlaylists";
import { recentlyPlayedType, reccomendedArtistType } from "./components/layout-discover/types-discover/discoverPageTypes"
import { RecentlyPlayed } from "./components/layout-discover/recentlyPlayed";
import { ReccomendedArtist } from "./components/layout-discover/reccomendedArtist";
import { SearchBar } from "./components/layout-discover/searchBar";
import { useAuth } from "./context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LogOut } from 'lucide-react';
import { useUserPlaylists } from "./hooks/useUserPlaylists";

const recentlyPlayedArray: recentlyPlayedType[] = [
  {
    id: 1,
    name: "Blinding Lights",
    artist: "The Weeknd",
    imageUrl: "https://images.unsplash.com/photo-1605722243979-fe0be8158232?w=60&h=60&fit=crop",
    duration: "3:20",
  },
  {
    id: 2,
    name: "Don't Start Now",
    artist: "Dua Lipa",
    imageUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=60&h=60&fit=crop",
    duration: "3:03",
  },
  {
    id: 3,
    name: "Watermelon Sugar",
    artist: "Harry Styles",
    imageUrl: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=60&h=60&fit=crop",
    duration: "2:54",
  },
];

const recommendedArtistsArray: reccomendedArtistType[] = [
  {
    id: 1,
    name: "Taylor Swift",
    imageUrl: "https://images.unsplash.com/photo-1561518776-e76a5e48f731?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Ed Sheeran",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Ariana Grande",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Post Malone",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "Billie Eilish",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
  {
    id: 6,
    name: "Drake",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  }
];

export default function Home() {
  const { user, loginWithSpotify, logout } = useAuth();
  const router = useRouter();
  const { playlists, loading, error } = useUserPlaylists();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');

    if (accessToken) {
      loginWithSpotify(accessToken);
      router.replace('/');
    }
  }, [loginWithSpotify, router]);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return (
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
             
             <FeaturedPlaylists id={idx} name={playlist.name} imageUrl={playlist.images[0].url} tracks={playlist.tracks.total}/>
            
              
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Recently Played</h2>
          <div className="bg-blue-800 bg-opacity-50 rounded-lg shadow-lg overflow-hidden">
            {recentlyPlayedArray.map((song) => (
              <RecentlyPlayed key={song.id} {...song} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Recommended Artists</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {recommendedArtistsArray.map((artist) => (
              <ReccomendedArtist key={artist.id} {...artist} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}