import { PopulationCompositionResponse } from "@/types"
import { apiClient } from "../apiClient"
import { useEffect, useState } from "react"

interface Props {
  prefCodes: number[]
}

export function usePopulationCompositions({ prefCodes }: Props) {
  const [populationCompositions, setPopulationCompositions] = useState<
    PopulationCompositionResponse[]
  >([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          prefCodes.map(async (prefCode) => {
            const response = await apiClient.get<PopulationCompositionResponse>(
              "api/v1/population/composition/perYear",
              { params: { prefCode, cityCode: "-" } },
            )
            return response.data
          }),
        )
        setPopulationCompositions(results)
      } catch (err) {
        setError(err as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [prefCodes])

  return {
    populationCompositions,
    isLoading,
    error,
  }
}
