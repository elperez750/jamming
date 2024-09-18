import Image from "next/image"
import { Play } from "lucide-react"
import { featuredPlayListType } from "./types-discover/discoverPageTypes"

export function FeaturedPlaylists({ id, name, imageUrl, tracks }: featuredPlayListType) {
  return (
    <div
      key={id}
      className="bg-blue-800 p-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 group"
    >
      <div className="relative aspect-square mb-4 overflow-hidden rounded-md cursor-pointer">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105 "
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
          <button className="text-white bg-blue-700 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-800">
            <Play size={24} fill="white" />
          </button>
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2 text-white">{name}</h3>
      <p className="text-sm text-blue-300">
        {tracks} songs 
      </p>
    </div>
  )
}