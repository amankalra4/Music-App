import axios from "axios";
import { ALBUM_URL, SONGS_URL } from '../Constants/URL';

export const getAlbums = axios.get(ALBUM_URL);

export const getSongs = axios.get(SONGS_URL);