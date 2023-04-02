import axios from 'axios'

const NO_AUTH_URLS = []

export const api = axios.create({
    baseURL: '',
    timeout: 3000,
})

api.interceptors.request.use(
    (config) => {
        const token = ''

        if (token && !NO_AUTH_URLS.includes(config.url)) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => Promise.reject(err)
)
