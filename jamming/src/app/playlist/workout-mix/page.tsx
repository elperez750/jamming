import React from 'react'
import { Playlist } from '../playlist'

const workoutMixPlaylist = {
  playlistName: "Workout Mix",
  playlistImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop",
  playlistDescription: "High-energy tracks to fuel your workout",
  songs: [
    { id: 1, name: "Stronger", artist: "Kanye West", imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=120&h=120&fit=crop", duration: "5:11" },
    { id: 2, name: "Eye of the Tiger", artist: "Survivor", imageUrl: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=120&h=120&fit=crop", duration: "4:05" },
    { id: 3, name: "Lose Yourself", artist: "Eminem", imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=120&h=120&fit=crop", duration: "5:26" },
    { id: 4, name: "Thunderstruck", artist: "AC/DC", imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=120&h=120&fit=crop", duration: "4:52" },
    { id: 5, name: "Pump It", artist: "The Black Eyed Peas", imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=120&h=120&fit=crop", duration: "3:35" },
    { id: 6, name: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&h=120&fit=crop", duration: "4:18" },
    { id: 7, name: "Til I Collapse", artist: "Eminem", imageUrl: "https://images.unsplash.com/photo-1526817575615-3685e135615d?w=120&h=120&fit=crop", duration: "4:57" },
    { id: 8, name: "Remember the Name", artist: "Fort Minor", imageUrl: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=120&h=120&fit=crop", duration: "3:47" },
    { id: 9, name: "Harder, Better, Faster, Stronger", artist: "Daft Punk", imageUrl: "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?w=120&h=120&fit=crop", duration: "3:45" }
  ]
}

export default function Page() {
  return (
    <Playlist
      playlistName={workoutMixPlaylist.playlistName}
      playlistImage={workoutMixPlaylist.playlistImage}
      playlistDescription={workoutMixPlaylist.playlistDescription}
      songs={workoutMixPlaylist.songs}
    />
  )
}