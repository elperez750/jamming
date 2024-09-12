export type PlaylistType = {
    type: "playlist";
    name: string;
    imageUrl: string;
    itemCount: number;

}


export type AlbumType = {
    type: "album";
    name: string;
    artist: string;
    imageUrl: string;
    year: number;

}


export type LibraryItemsType = PlaylistType | AlbumType;