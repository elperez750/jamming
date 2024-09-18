"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "../../context/authContext";
import axios from "axios";
import Image from "next/image";
import { Play, Loader2, Loader } from "lucide-react";
import { Playlist, Track } from "../playlistTypes";
import Loading from "@/app/components/ui/loading";

function formatDuration(ms: number) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export default function PlaylistPage() {
  const { playlistId } = useParams();
  const { accessToken } = useAuth();
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken || !playlistId) return;

    const fetchPlaylist = async () => {
      try {
        const response = await axios.get<Playlist>(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPlaylist(response.data);
      } catch (error) {
        setError("Failed to fetch playlist details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [accessToken, playlistId]);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-900 to-indigo-950">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-900 text-white">
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white min-h-screen">
      <div className="p-8 bg-blue-600">
        <h1 className="text-4xl font-bold">{playlist?.name || "Playlist"}</h1>
      </div>
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {playlist?.tracks.items.map(({ track }) => (
            <div
              key={track.id}
              className="bg-blue-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={track.album.images[0].url}
                  alt={track.name}
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                  <Play
                    size={48}
                    className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{track.name}</h2>
                <p className="text-blue-300 text-sm truncate">
                  {track.artists.map((artist) => artist.name).join(", ")}
                </p>
                <p className="text-blue-300 text-sm">
                  {formatDuration(track.duration_ms)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
