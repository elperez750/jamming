import Image from "next/image";
import { Play } from "lucide-react";
import { recentlyPlayedType } from "./types-discover/discoverPageTypes";



function msToString(ms: number) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${parseInt(seconds) < 10 ? "0" : ""}${seconds}`;
}


export function RecentlyPlayed(
 { id, songName, artistName, imageUrl, duration }: recentlyPlayedType,  length : number, 
) {
  return (
    <div
      key={id}
      className={`flex items-center p-4 ${
        id !== length - 1 ? "border-b border-blue-900" : ""
      }`}
    >
      <Image
        src={imageUrl}
        alt={songName}
        width={60}
        height={60}
        className="rounded-md mr-4"
      />
      <div className="flex-grow">
        <h3 className="font-semibold">{songName}</h3>
        <p className="text-sm text-blue-300">{artistName}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-blue-300 hover:text-white transition dration-300">
          <Play size={20} />
        </button>
        <span className="text-sm text-blue-300">{msToString(duration)}</span>
      </div>
    </div>
  );
}
