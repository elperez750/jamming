import { Play, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'
import { TopSongsType } from './types-top-charts/topChartsPageType'


export function TopSongs({id, name, artist, imageUrl, duration}: TopSongsType) {
    return(
    <div className="flex items-center p-4 hover:bg-blue-700 hover:bg-opacity-30 transition duration-300 group">
    <span className="text-2xl font-bold text-cyan-400 w-8">{id}</span>
    <Image
      src={imageUrl}
      alt={name}
      width={60}
      height={60}
      className="rounded-md mr-4 object-cover"
    />
    <div className="flex-grow">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-blue-300">{artist}</p>
    </div>
    <span className="text-sm text-blue-300 mr-4">{duration}</span>
    <Play className="w-8 h-8 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <MoreHorizontal className="w-6 h-6 text-blue-300 ml-4" />
  </div>
    )
}

