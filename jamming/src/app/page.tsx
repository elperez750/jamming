import Image from "next/image";
import Travis from "../../public/static/images/travis.jpg";
import { FeaturedPlaylists } from "./components/layout/featuredPlaylists";
import { featuredPlayListType, reccomendedArtistType } from "./components/types/homePageTypes";
import { recentlyPlayedType } from "./components/types/homePageTypes";
import { RecentlyPlayed } from "./components/layout/recentlyPlayed";
import { ReccomendedArtist } from "./components/layout/reccomendedArtist";

const featuredPlaylistsArray: featuredPlayListType[] = [
  {
    id: 1,
    name: "Today's Top Hits",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    songs: 50,
    hours: 3,
  },
  {
    id: 2,
    name: "Chill Vibes",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
    songs: 40,
    hours: 2.5,
  },
  {
    id: 3,
    name: "Workout Motivation",
    imageUrl: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=300&h=300&fit=crop",
    songs: 60,
    hours: 4,
  },
  {
    id: 4,
    name: "Indie Discoveries",
    imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop",
    songs: 45,
    hours: 3.2,
  },
];

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
  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Jamming</h1>


      {/* This is the featured playlist section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlaylistsArray.map((playlist) => (
            <FeaturedPlaylists key={playlist.id} {...playlist} />
          ))}
        </div>
      </section>



      {/* Recently played section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recently Played</h2>
        <div className="bg-blue-800 rounded-lg shadow-lg overflow-hidden">
          {recentlyPlayedArray.map((song) => (
            <RecentlyPlayed key={song.id} {...song} />
          ))}

        </div>
      </section>



      
      {/* Reccomended artists section  */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Recommended Artists</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {recommendedArtistsArray.map((artist) => (
              <ReccomendedArtist key={artist.id} {...artist} />
          ))}
        </div>
      </section>
    </div>
  );
}
