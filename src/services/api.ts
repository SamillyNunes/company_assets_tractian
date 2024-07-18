import axios from "axios";

const api = axios.create({
    baseURL: "fake-api.tractian.com/companies/"
});

export default api;