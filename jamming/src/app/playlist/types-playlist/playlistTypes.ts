export type Song = {
    id: number;
    name: string;
    artist: string;
    imageUrl: string;
    duration: string;
}

export type PlaylistType = {
    playlistName: string;
    playlistImage: string;
    playlistDescription: string;
    songs: Song[];
}