import { Song, PlaylistType } from './types-playlist/playlistTypes';
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, Clock, Heart, Share2, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'

export function Playlist({ playlistName, playlistImage, playlistDescription, songs=[] }: PlaylistType) {
    const totalDuration = songs.reduce((acc, song) => {
        const [mins, secs] = song.duration.split(':').map(Number);
        return acc + mins * 60 + secs;
      }, 0);
      const formattedDuration = `${Math.floor(totalDuration / 60)} min ${totalDuration % 60} sec`;

    return (
        <div className="bg-gradient-to-br from-blue-900 to-indigo-950 min-h-screen p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end mb-8 space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative w-64 h-64 md:w-72 md:h-72 group">
            <Image
              src={playlistImage}
              alt={playlistName}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <Play className="w-16 h-16 text-white" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              {playlistName}
            </h1>
            <p className="text-blue-300 mb-4 text-lg">{playlistDescription}</p>
            <div className="flex items-center justify-center md:justify-start space-x-4 text-sm">
              <span>{songs.length} songs</span>
              <span>•</span>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{formattedDuration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center space-x-4">
          <button className="bg-cyan-400 text-blue-900 rounded-full p-3 hover:bg-cyan-300 transition-colors duration-300 flex items-center justify-center">
            <Play className="w-6 h-6" />
          </button>
          <button className="text-white hover:text-cyan-400 transition-colors duration-300">
            <Heart className="w-6 h-6" />
          </button>
          <button className="text-white hover:text-cyan-400 transition-colors duration-300">
            <Share2 className="w-6 h-6" />
          </button>
          <button className="text-white hover:text-cyan-400 transition-colors duration-300">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>

        {songs.length > 0 ? (
          <div className="bg-blue-800 bg-opacity-30 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm mb-8">
            <div className="px-6 py-4 border-b border-blue-700 text-sm text-blue-300 grid grid-cols-12 gap-4">
              <span className="col-span-1">#</span>
              <span className="col-span-5">Title</span>
              <span className="col-span-4">Artist</span>
              <span className="col-span-2 text-right">Duration</span>
            </div>
            {songs.map((song, index) => (
              <div key={song.id} className="px-6 py-4 hover:bg-blue-700 hover:bg-opacity-30 transition duration-300 group grid grid-cols-12 gap-4 items-center">
                <span className="col-span-1 text-blue-300 group-hover:text-cyan-400">{index + 1}</span>
                <div className="col-span-5 flex items-center">
                  <Image
                    src={song.imageUrl}
                    alt={song.name}
                    width={40}
                    height={40}
                    className="rounded-md mr-4 object-cover"
                  />
                  <span className="font-medium">{song.name}</span>
                </div>
                <span className="col-span-4 text-blue-300">{song.artist}</span>
                <span className="col-span-2 text-right text-blue-300">{song.duration}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-blue-300 py-8">
            This playlist is empty. Add some songs to get started!
          </div>
        )}

        <div className="flex justify-center items-center space-x-6">
          <button className="text-blue-300 hover:text-white transition-colors duration-300">
            <Shuffle className="w-6 h-6" />
          </button>
          <button className="text-blue-300 hover:text-white transition-colors duration-300">
            <SkipBack className="w-6 h-6" />
          </button>
          <button className="bg-cyan-400 text-blue-900 rounded-full p-3 hover:bg-cyan-300 transition-colors duration-300">
            <Play className="w-8 h-8" />
          </button>
          <button className="text-blue-300 hover:text-white transition-colors duration-300">
            <SkipForward className="w-6 h-6" />
          </button>
          <button className="text-blue-300 hover:text-white transition-colors duration-300">
            <Repeat className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
    )

}