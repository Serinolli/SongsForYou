import { Artist } from "../artist.model";
import { Images } from "./image.model";

export interface SongsResponse {
    album_group: string,
    album_type: string,
    href: string,
    id: string,
    name: string,
    releaseDate: Date,
    // release_date_precision: enum?
    totalTracks: number,
    // type: enum?
    uri: string,
    artist: Artist[],
    images: Images []
}