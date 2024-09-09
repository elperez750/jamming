import React from 'react'
import { Music, Headphones, BarChart2, MapPin, Users, List, PlusCircle } from 'lucide-react' 
import { NavItem } from "./navItem"
import { PlaylistItem } from "./playlistItem"

export default function SideNavbar() {
  const jamArray = [
    { id: 1, name: "Summer Vibes", count: 12},
    { id: 2, name: "Chill Beats", count: 8},
    { id: 3, name: "Workout Mix", count: 15},

  ]
  return (
    <nav className="bg-gradient-to-b from-blue-950 to-indigo-950 text-white w-64 h-screen flex flex-col overflow-hidden relative">
      <div className="p-6 flex items-center space-x-2">
        <Music className="h-8 w-8 text-blue-400" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Jamming
        </span>
      </div>
      
      <div className="flex-1 flex flex-col justify-between overflow-y-auto custom-scrollbar">
        <ul className="space-y-2 px-4 py-4">
        <NavItem href="/" icon={<Headphones className="mr-3" />} text="Discover" />
          <NavItem href="/top-charts" icon={<BarChart2 className="mr-3" />} text="Top Charts" />
          <NavItem href="/around-you" icon={<MapPin className="mr-3" />} text="Around You" />
          <NavItem href="/top-artists" icon={<Users className="mr-3" />} text="Top Artists" />
          <NavItem href="/library" icon={<List className="mr-3" />} text="Library" />
          
        </ul>
        
        <div className="mt-auto p-4 border-t border-blue-800">
          <h3 className="text-sm uppercase font-semibold mb-2 text-blue-300">Your Jams</h3>
          <ul className="space-y-1 mb-4">
            {jamArray.map((jam) => (
              <PlaylistItem key={jam.id} name={jam.name} count={jam.count} />
            ))}
     
          </ul>
          
          <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 px-4 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-cyan-600 transition duration-300">
            <PlusCircle className="mr-2" />
            New Jam Session
          </button>
        </div>
      </div>
   
    </nav>
  )
}


