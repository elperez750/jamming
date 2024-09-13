import Image from "next/image";
import { Play, MoreHorizontal } from 'lucide-react';

interface TopTrackProps {
  id: number;
  trackName: string;
  imageUrl: string;
  artistName: string;
}

export function TopTrack({ id, trackName, imageUrl, artistName }: TopTrackProps) {
  return (
    <div key={id} className="flex-shrink-0 w-48 p-2 group hover:bg-blue-800 hover:bg-opacity-30 transition-all duration-300 rounded-lg">
      <div className="relative mb-2 aspect-square">
        <Image 
          src={imageUrl} 
          alt={trackName} 
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 rounded-md">
          <Play className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300" size={32} />
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 text-sm mb-1 truncate">{trackName}</h3>
        <p className="text-xs text-blue-300 mb-2 truncate">{artistName}</p>
        <button className="text-blue-300 hover:text-cyan-300 transition-colors duration-300">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  )
}