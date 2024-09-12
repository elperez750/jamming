import { ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';
import { TopAlbumsType } from './types-top-charts/topChartsPageType';
export function TopAlbums({id, name, imageUrl, artist}: TopAlbumsType) {
    return (
        <div key={id} className="bg-blue-800 bg-opacity-30 p-4 rounded-lg shadow-lg hover:bg-blue-700 hover:bg-opacity-30 transition duration-300 flex items-center group">
          <Image
            src={imageUrl}
            alt={name}
            width={80}
            height={80}
            className="rounded-md mr-4 object-cover"
          />
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-blue-300">{artist}</p>
          </div>
          <Play className="w-8 h-8 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2" />
          <ChevronRight className="text-blue-300" />
        </div>
      )
}