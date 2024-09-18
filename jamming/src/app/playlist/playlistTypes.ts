export type Track =  {
    duration_ms: number;
    id: string;
    name: string;
    artists: { name: string }[];
    album: {
      images: { url: string }[];
    };
  }
  
  export type Playlist = {
    name: string;
    tracks: {
      items: { track: Track }[];
    };
  }