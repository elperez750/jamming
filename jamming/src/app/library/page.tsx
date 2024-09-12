import React from 'react'
import { Heart } from 'lucide-react'
import { LibraryItemsType } from '../components/layout-library/types-library/libraryPageTypes'
import { LibraryItem } from '../components/layout-library/libraryItem'

const libraryItems: LibraryItemsType[] = [
  { type: 'playlist', name: 'My Favorite Tracks', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', itemCount: 42 },
  { type: 'album', name: 'Midnight Memories', artist: 'The Night Owls', imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop', year: 2023 },
  { type: 'playlist', name: 'Workout Beats', imageUrl: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=300&h=300&fit=crop', itemCount: 28 },
  { type: 'album', name: 'Sunshine Melodies', artist: 'Summer Breeze', imageUrl: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e?w=300&h=300&fit=crop', year: 2022 },
  { type: 'playlist', name: 'Chill Vibes', imageUrl: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?w=300&h=300&fit=crop', itemCount: 56 },
  { type: 'album', name: 'Electric Dreams', artist: 'Neon Nights', imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop', year: 2023 },
]

export default function LibraryPage() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-950 min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Your Library</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-800 p-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          <Heart className="w-12 h-12 text-pink-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Liked Songs</h2>
          <p className="text-blue-300">238 liked songs</p>
        </div>
        {libraryItems.map((item, index) => (
             <LibraryItem key={index} item={item} />
       
        ))}
        
      </div>
    </div>
  )
}