import Image from "next/image";
import { Play } from "lucide-react";
import { recentlyPlayedType } from "../types-discover/discoverPageTypes";

export function RecentlyPlayed(
 { id, name, artist, imageUrl, duration }: recentlyPlayedType,  length : number, 
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
        alt={name}
        width={60}
        height={60}
        className="rounded-md mr-4"
      />
      <div className="flex-grow">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-blue-300">{artist}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-blue-300 hover:text-white transition dration-300">
          <Play size={20} />
        </button>
        <span className="text-sm text-blue-300">{duration}</span>
      </div>
    </div>
  );
}
