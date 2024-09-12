import React from 'react'
import { Playlist } from '../playlist'

const chillMixPlaylist = {
  playlistName: "Chill Mix",
  playlistImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&h=120&fit=crop",
  playlistDescription: "Mellow tunes to help you relax and unwind",
  songs: [
    { id: 1, name: "Flightless Bird, American Mouth", artist: "Iron & Wine", imageUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=120&h=120&fit=crop", duration: "4:01" },
    { id: 2, name: "The Scientist", artist: "Coldplay", imageUrl: "https://images.unsplash.com/photo-1616356607338-fd87169ecf1b?w=120&h=120&fit=crop", duration: "5:09" },
    { id: 3, name: "Skinny Love", artist: "Bon Iver", imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&h=120&fit=crop", duration: "4:13" },
    { id: 4, name: "Holocene", artist: "Bon Iver", imageUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=120&h=120&fit=crop", duration: "5:36" },
    { id: 5, name: "Heartbeats", artist: "José González", imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=120&h=120&fit=crop", duration: "2:41" },
    { id: 6, name: "To Build a Home", artist: "The Cinematic Orchestra", imageUrl: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=120&h=120&fit=crop", duration: "6:12" },
    { id: 7, name: "Bloom", artist: "The Paper Kites", imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=120&h=120&fit=crop", duration: "3:13" },
    { id: 8, name: "Re: Stacks", artist: "Bon Iver", imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop", duration: "6:41" }
  ]
}

export default function ChillMixPlaylist() {
  return (
    <Playlist
      playlistName={chillMixPlaylist.playlistName}
      playlistImage={chillMixPlaylist.playlistImage}
      playlistDescription={chillMixPlaylist.playlistDescription}
      songs={chillMixPlaylist.songs}
    />
  )
}