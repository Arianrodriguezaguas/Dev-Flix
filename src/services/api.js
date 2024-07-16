import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "dcc7cc1a58c7b4019b0571c7033d0ddd",
        language: "en",
        page: 1
    }
})

export default api