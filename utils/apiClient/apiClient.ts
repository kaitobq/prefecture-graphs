import axios from "axios"

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
  },
})
