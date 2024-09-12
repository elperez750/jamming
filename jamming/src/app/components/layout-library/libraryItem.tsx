import React from "react";
import Image from "next/image";
import { Music, Disc } from "lucide-react";
import { LibraryItemsType } from "./types-library/libraryPageTypes";


export function LibraryItem({item}: {item: LibraryItemsType}) {
  return (
    <div className="bg-blue-800 p-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
      <Image
        src={item.imageUrl}
        alt={item.name}
        width={150}
        height={150}
        className="w-full h-auto rounded-md mb-4 object-cover"
      />
      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
      {item.type === 'playlist' ? (
        <div className="flex items-center text-blue-300">
          <Music className="w-4 h-4 mr-2" />
          <span>{item.itemCount} tracks</span>
        </div>
      ) : (
        <div className="flex items-center text-blue-300">
          <Disc className="w-4 h-4 mr-2" />
          <span>{item.artist} • {item.year}</span>
        </div>
      )}
    </div>

  )
}

