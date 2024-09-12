import React from 'react'
import Image from 'next/image'
import { Play, Disc, User, ChevronRight } from 'lucide-react'
import { TopSongs } from '../components/layout-top-charts/topSongs';
import { TopAlbums } from '../components/layout-top-charts/topAlbums';
import { TopArtists } from '../components/layout-top-charts/topArtists';

const topSongsArray = [
  { id: 1, name: "Blinding Lights", artist: "The Weeknd", imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&h=120&fit=crop", duration: "3:20" },
  { id: 2, name: "Dance Monkey", artist: "Tones and I", imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop", duration: "3:29" },
  { id: 3, name: "Watermelon Sugar", artist: "Harry Styles", imageUrl: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=120&h=120&fit=crop", duration: "2:54" },
  { id: 4, name: "Don't Start Now", artist: "Dua Lipa", imageUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=120&h=120&fit=crop", duration: "3:03" },
  { id: 5, "name": "Savage Love", artist: "Jawsh 685 & Jason Derulo", imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=120&h=120&fit=crop", duration: "2:51" }
]

const topAlbumsArray = [
  { id: 1, name: "After Hours", artist: "The Weeknd", imageUrl: "https://images.unsplash.com/photo-1605722243979-fe0be8158232?w=120&h=120&fit=crop" },
  { id: 2, name: "Future Nostalgia", artist: "Dua Lipa", imageUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=120&h=120&fit=crop" },
  { id: 3, name: "Fine Line", artist: "Harry Styles", imageUrl: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=120&h=120&fit=crop" },
]

const topArtistsArray = [
  { id: 1, name: "The Weeknd", imageUrl: "https://images.unsplash.com/photo-1605722243979-fe0be8158232?w=120&h=120&fit=crop" },
  { id: 2, name: "Dua Lipa", imageUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=120&h=120&fit=crop" },
  { id: 3, name: "Harry Styles", imageUrl: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=120&h=120&fit=crop" },
  { id: 4, name: "Billie Eilish", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop" },
  { id: 5, name: "Drake", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop" },
]

export default function TopChartsPage() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-950 min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Top Charts</h1>

      <div className="grid gap-8 md:grid-cols-2">


          { /* This is the top songs section */ }
        <section className="mb-12 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Play className="mr-2 text-cyan-400" /> Top Songs
          </h2>
          <div className="bg-blue-800 bg-opacity-30 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm">
            {topSongsArray.map((song) => (
              <TopSongs key={song.id} {...song} />
            ))}
          </div>
        </section>



          { /* This is the top albums section */ }
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Disc className="mr-2 text-cyan-400" /> Top Albums
          </h2>
          <div className="grid gap-4">
           
           {topAlbumsArray.map((album) => (
              <TopAlbums key={album.id} {...album} />
            ))}
          
          </div>
        </section>


          { /* This is the top artists section */ }
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <User className="mr-2 text-cyan-400" /> Top Artists
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            {topArtistsArray.map((artist) => (
              <TopArtists key={artist.id} {...artist} />
            ))}


          </div>
        </section>
      </div>
    </div>
  )
}