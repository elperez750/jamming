import { Playlist } from "../playlist";

const mockPlaylist = {
  playlistName: "Summer Vibes",
  playlistImage:
    "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop",
  playlistDescription: "Relax and unwind with these smooth tunes",
  songs: [
    {
      id: 1,
      name: "Breathe",
      artist: "Télépopmusik",
      imageUrl:
        "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=120&h=120&fit=crop",
      duration: "3:35",
    },
    {
      id: 2,
      name: "Porcelain",
      artist: "Moby",
      imageUrl:
        "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=120&h=120&fit=crop",
      duration: "3:58",
    },
    {
      id: 3,
      name: "Midnight City",
      artist: "M83",
      imageUrl:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&h=120&fit=crop",
      duration: "4:03",
    },
    {
      id: 4,
      name: "Teardrop",
      artist: "Massive Attack",
      imageUrl:
        "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=120&h=120&fit=crop",
      duration: "5:30",
    },
    {
      id: 5,
      name: "Fade Into You",
      artist: "Mazzy Star",
      imageUrl:
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=120&h=120&fit=crop",
      duration: "4:55",
    },
    {
      id: 6,
      name: "Lotus Flower",
      artist: "Radiohead",
      imageUrl:
        "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=120&h=120&fit=crop",
      duration: "5:01",
    },
    {
      id: 7,
      name: "The Night We Met",
      artist: "Lord Huron",
      imageUrl:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=120&h=120&fit=crop",
      duration: "3:28",
    },
  ],
};

export default function Page() {
  return (
    <Playlist
      playlistName={mockPlaylist.playlistName}
      playlistImage={mockPlaylist.playlistImage}
      playlistDescription={mockPlaylist.playlistDescription}
      songs={mockPlaylist.songs}
    />
  );
}
