import { Prefecture } from "@/types/prefecture"
import * as Highcharts from "highcharts"
import { HighchartsReact } from "highcharts-react-official"
import { useRef } from "react"
import { useHighcharts } from "@/utils/hooks/use-highcharts"

interface Props {
  prefCodes: number[]
  label: string
  prefectures: Prefecture[]
}

export function Graph(props: Props) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)
  const { series, year, isLoading, error } = useHighcharts(props)

  const options: Highcharts.Options = {
    title: {
      text: props.label,
    },
    xAxis: {
      categories: year,
    },
    series: series,
    tooltip: {
      formatter: function () {
        return `<b>${this.series.name}</b><br/>${this.x}: ${this.y?.toLocaleString()}人`
      },
    },
  }

  if (isLoading) {
    return <div>ロード中</div>
  }

  if (error) {
    alert(`エラーが発生しました: ${error}`)
  }

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </>
  )
}
