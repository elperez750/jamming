import Image from "next/image"
import { featuredPlayListType } from "../types/homePageTypes"


export function FeaturedPlaylists({id, name, imageUrl, songs, hours}: featuredPlayListType) { 
    return(
            <div
              key={id}
              className="bg-blue-800 p-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              <Image
                src={imageUrl}
                alt={name}
                width={200}
                height={200}
                className="w-full h-auto rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{name}</h3>
              <p className="text-sm text-blue-300">
                {songs} songs • {hours} hours
              </p>
            </div>
    )
}

