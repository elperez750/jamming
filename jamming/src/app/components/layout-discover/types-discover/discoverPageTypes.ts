export type featuredPlayListType = {
    id: number;
    name: string;
    imageUrl: string;
    tracks: number
  };
  


  export type recentlyPlayedType = {
    id: number;
    songName: string;
    artistName: string;
    imageUrl: string;
    duration: number;
  };
  


  export type topArtistType = {
    id: number;
    artistName: string;
    imageUrl: string;
  }



  export type reccomendedTracksType = {
    id: number;
    trackName: string;
    imageUrl: string;
    artistName: string;

  }


  export type topTracksType = {
    id: number;
    trackName: string;
    imageUrl: string;
    artistName: string

  }