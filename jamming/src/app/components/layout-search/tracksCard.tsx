import { tracksCardType } from "./types-search/searchPageTypes";
import Image from "next/image";
import { Play } from 'lucide-react';
import { msToString } from "../layout-discover/recentlyPlayed";
export function TracksCard({
  id,
  trackName,
  artistName,
  imageUrl,
  duration,
}: tracksCardType) {
  return (
    <div className="bg-gray-700 bg-opacity-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <Image 
          src={imageUrl} 
          alt={trackName} 
          width={200} 
          height={200} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center transition-all duration-300">
          <Play className="text-white opacity-0 hover:opacity-100 transition-all duration-300" size={48} />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white truncate mb-1">{trackName}</h2>
        <p className="text-sm text-blue-300 truncate mb-3">{artistName}</p>
        <div className="flex items-center justify-between text-xs text-blue-300">
          <span className="flex items-center">
           
            {msToString(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}