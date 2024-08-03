import useSWR from "swr"
import { apiClient } from "../apiClient"
import { PrefectureResponse } from "@/types"

export function usePrefecture() {
  const fetcher = (url: string) => apiClient.get(url).then((res) => res.data)
  const { data, error } = useSWR<PrefectureResponse>("api/v1/prefectures", fetcher)

  return {
    prefectures: data?.result || [],
    isLoading: !error && !data,
    error: error,
  }
}
