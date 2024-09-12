import Image from 'next/image';
import { Play } from 'lucide-react';
import { TopArtistsType } from './types-top-charts/topChartsPageType';

export function TopArtists({id, name, imageUrl}: TopArtistsType) {
    return (
        <div key={id} className="flex flex-col items-center bg-blue-800 bg-opacity-30 p-4 rounded-lg hover:bg-blue-700 hover:bg-opacity-30 transition duration-300 group">
          <div className="relative mb-2">
            <Image
              src={imageUrl}
              alt={name}
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Play className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
          <p className="text-center font-semibold">{name}</p>
        </div>
      )
}