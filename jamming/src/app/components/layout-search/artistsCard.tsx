import Image from "next/image";
import { artistCardType } from "./types-search/searchPageTypes";

export const ArtistsCard = ({ id, artistName, imageUrl }: artistCardType) => {
  return (
    <div
      key={id}
      className="bg-blue-800 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-75 transition-all duration-300 cursor-pointer text-center"
    >
      <Image
        src={imageUrl}
        alt={artistName}
        width={200}
        height={200}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
      />
      <h3 className="font-medium text-white truncate">{artistName}</h3>
    </div>
  );
};
