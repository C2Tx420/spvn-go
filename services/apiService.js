import axios from "axios"

const api = axios.create();

api.interceptors.response.use((res) => {
    return res.data
});

export const ApiService = {
    get: (url, config = {}) => api.get(url, config),
    post: (url, data, config = {}) => api.post(url, data, config),
    patch: (url, data) => api.patch(url, data)
}