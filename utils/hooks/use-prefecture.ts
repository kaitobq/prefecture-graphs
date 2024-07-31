import useSWR from "swr"
import { apiClient } from "../apiClient"

export function usePrefecture() {
  const fetcher = (url: string) => apiClient.get(url).then((res) => res.data)
  const { data, error } = useSWR("api/v1/prefectures", fetcher)

  return {
    prefectures: data?.result || [],
    isLoading: !error && !data,
    error: error,
  }
}
