import Image from "next/image";
import { albumCardType } from "./types-search/searchPageTypes";

export function AlbumsCard({ id, albumName, artistName, imageUrl}: albumCardType) {
  return (
    <div key={id} className="bg-blue-800 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-75 transition-all duration-300 cursor-pointer">
      <Image src={imageUrl} alt={albumName} width="200" height="200" className="w-full aspect-square object-cover rounded-md mb-2" />
      <h3 className="font-medium text-white truncate">{albumName}</h3>
      <p className="text-sm text-blue-300 truncate">{artistName}</p>
    </div>
  )
}

