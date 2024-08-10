import { Prefecture } from "@/types"
import { usePopulationCompositions } from "./use-population-compositions"

interface Props {
  prefCodes: number[]
  label: string
  prefectures: Prefecture[]
}

export function useHighcharts(props: Props) {
  const { prefecturePopulations, isLoading, error } = usePopulationCompositions({
    prefCodes: props.prefCodes,
  })

  const data = prefecturePopulations.map((pc) =>
    pc.result.data.find((data) => data.label === props.label),
  )
  const values = data.map((dt) => dt?.data.map((d) => d.value))
  const year = data[0]?.data.map((dt) => dt.year.toString()) || []
  const series: Highcharts.SeriesOptionsType[] = values.map((valueArray, index) => ({
    name: props.prefectures.find((pref) => pref.prefCode === props.prefCodes[index])
      ?.prefName,
    data: valueArray,
    type: "line",
  }))

  return {
    series,
    year,
    isLoading,
    error,
  }
}
