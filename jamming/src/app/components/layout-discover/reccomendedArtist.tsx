import Image from "next/image";
import { reccomendedArtistType } from "./types-discover/discoverPageTypes";

export function ReccomendedArtist({id, name, imageUrl}: reccomendedArtistType) {
    return (
        <div key={id} className="flex-shrink-0">
              <Image
                src={imageUrl}
                alt={name}
                width={100}
                height={100}
                className="rounded-full mb-2"
              />
              <p className="text-center text-sm">{name}</p>
            </div>
    )
}