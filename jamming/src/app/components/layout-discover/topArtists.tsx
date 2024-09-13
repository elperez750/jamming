import Image from "next/image";
import { topArtistType } from "./types-discover/discoverPageTypes";

export function TopArtist({ id, artistName, imageUrl }: topArtistType) {
  return (
    <div key={id} className="flex-shrink-0 w-24 sm:w-28 md:w-32">
      <div className="relative w-full pb-[100%] mb-2">
        <Image
          src={imageUrl}
          alt={artistName}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <p className="text-center text-sm truncate px-1" title={artistName}>
        {artistName}
      </p>
    </div>
  );
}