import axios from 'axios';

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do/"

export const fetchTopAlbums = async() => {
    try {
        const response = await axios(BACKEND_ENDPOINT + "albums/top/");
        return response.data;
    }
    catch(err) {
        console.log(err);
    }
}