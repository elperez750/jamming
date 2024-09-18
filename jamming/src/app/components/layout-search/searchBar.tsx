"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { useSearch } from "@/app/hooks/useSearch";
import { TracksCard } from "./tracksCard";
import { AlbumsCard } from "./albumsCard";
import { ArtistsCard } from "./artistsCard";
import Loading from "../ui/loading";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchResults, loading } = useSearch(searchTerm);

  const tracks = searchResults.tracks;
  const albums = searchResults.albums;
  const artists = searchResults.artists;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="w-full max-w-3xl mx-auto relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-blue-300" />
        </div>
        <input
          type="text"
          placeholder="Search for songs, artists, or albums..."
          onChange={handleChange}
          value={searchTerm}
          className="w-full py-3 pl-12 pr-24 text-base bg-blue-800 bg-opacity-50 text-white placeholder-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 hover:bg-opacity-70"
        />
        
      </div>

      {loading ? (
        <Loading />
      ) : searchTerm ? (
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Tracks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tracks.map((track: any) => (
                <TracksCard
                  id={track.id}
                  trackName={track.name}
                  artistName={track.artists.map((artist: any) => artist.name).join(", ")}
                  imageUrl={track.album.images[0].url}
                  duration={track.duration_ms}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Albums</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {albums.map((album: any) => (
                <AlbumsCard id={album.id} albumName={album.name} artistName={album.artists.map((artist: any) => artist.name).join(", ")} imageUrl={album.images[0].url} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Artists</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {artists.map((artist: any) => (
                <ArtistsCard id={artist.id} artistName={artist.name} imageUrl={artist.images[0]?.url} />
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="flex justify-center mt-10">
          <h2 className="text-xl text-blue-300">Please enter a search term</h2>
        </div>
      )}
    </div>
  );
};