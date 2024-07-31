import useSWR from "swr"
import { apiClient } from "../apiClient"

interface Props {
  prefCode: number
}

export function usePopulationComposition(props: Props) {
  const fetcher = (url: string) =>
    apiClient
      .get(url, { params: { prefCode: props.prefCode, cityCode: "-" } })
      .then((res) => res.data)
  const { data, error } = useSWR("api/v1/population/composition/perYear", fetcher)

  return {
    populationComposition: data?.result.data || [],
    isLoading: !error && !data,
    error: error,
  }
}
