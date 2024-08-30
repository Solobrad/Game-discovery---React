import axios from "axios";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6e910b1993ac4652b24d3117a9ba7c8b'
    }
});