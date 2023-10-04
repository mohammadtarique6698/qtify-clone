import axios from 'axios';

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do/"

export const fetchTopAlbums = async() => {
    try {
        const response1 = await axios(BACKEND_ENDPOINT + "albums/top/");
        return response1.data;
    }
    catch(err) {
        console.log(err);
    }
}

export const fetchNewAlbums = async () => {
    try{
        const response2 = await axios(BACKEND_ENDPOINT + "albums/new/");
        return response2.data;
    } catch(err) {
        console.log(err);
    }
}

export const fetchSongs = async () => {
    try{
        const response3 = await axios(BACKEND_ENDPOINT + "songs/");
        return response3.data
    } catch(err) {
        console.log(err)
    }
}