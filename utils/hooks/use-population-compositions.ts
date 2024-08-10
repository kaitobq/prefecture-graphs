import { PopulationCompositionResponse } from "@/types"
import { apiClient } from "../apiClient"
import { useEffect, useState } from "react"
import { populationStore } from "../stores"

interface Props {
  prefCodes: number[]
}

export function usePopulationCompositions({ prefCodes }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [prefecturePopulations, setPrefecturePopulations] =
    populationStore.usePrefecturePopulations()

  useEffect(() => {
    const newPrefCodes = prefCodes.filter(
      (prefCode) => !prefecturePopulations.some((pp) => pp.prefCode === prefCode),
    )

    const filteredPopulations = prefecturePopulations.filter((pp) =>
      prefCodes.includes(pp.prefCode),
    )
    setPrefecturePopulations(filteredPopulations)

    const fetchData = async () => {
      try {
        const results = await Promise.all(
          newPrefCodes.map(async (prefCode) => {
            const response = await apiClient.get<PopulationCompositionResponse>(
              "api/v1/population/composition/perYear",
              { params: { prefCode, cityCode: "-" } },
            )
            return response.data
          }),
        )

        results.forEach((result, index) => {
          const prefCode = newPrefCodes[index]

          setPrefecturePopulations((prev) => [
            ...prev,
            {
              prefCode: prefCode,
              result: {
                boundaryYear: result.result.boundaryYear,
                data: result.result.data,
              },
            },
          ])
        })
        setIsLoading(false)
      } catch (err) {
        setError(err as Error)
      }
    }

    if (newPrefCodes.length > 0) {
      fetchData()
    } else {
      setIsLoading(false)
    }
  }, [prefCodes])

  return {
    prefecturePopulations,
    isLoading,
    error,
  }
}
