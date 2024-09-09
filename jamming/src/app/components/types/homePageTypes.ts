export type featuredPlayListType = {
    id: number;
    name: string;
    imageUrl: string;
    songs: number;
    hours: number;
  };
  


  export type recentlyPlayedType = {
    id: number;
    name: string;
    artist: string;
    imageUrl: string;
    duration: string;
  };
  


  export type reccomendedArtistType = {
    id: number;
    name: string;
    imageUrl: string;
  }