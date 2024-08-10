import { Prefecture } from "@/types/prefecture"
import * as Highcharts from "highcharts"
import { HighchartsReact } from "highcharts-react-official"
import { useRef } from "react"
import { useHighcharts } from "@/utils/hooks/use-highcharts"
import Loading from "@/app/loading"

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
      style: {
        color: "#343c8f",
      },
    },
    xAxis: {
      categories: year,
      title: {
        text: "年度",
        style: {
          color: "#343c8f",
        },
      },
      labels: {
        style: {
          color: "#343c8f",
        },
      },
    },
    yAxis: {
      title: {
        text: "人口数",
        style: {
          color: "#343c8f",
        },
      },
      labels: {
        style: {
          color: "#343c8f",
        },
      },
    },
    series: series,
    tooltip: {
      formatter: function () {
        return `<b>${this.series.name}</b><br/>${this.x}: ${this.y?.toLocaleString()}人`
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
            chart: {
              height: 300,
            },
          },
        },
        {
          condition: {
            minWidth: 501,
            maxWidth: 700,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
            chart: {
              height: 400,
            },
          },
        },
        {
          condition: {
            minWidth: 701,
          },
          chartOptions: {
            legend: {
              layout: "vertical",
              align: "right",
              verticalAlign: "middle",
            },
            chart: {
              height: 600,
            },
          },
        },
      ],
    },
    credits: {
      text: "created by @kaitobq",
      href: "https://github.com/kaitobq",
    },
    chart: {
      backgroundColor: "#f5f5f5",
    },
  }

  if (isLoading) {
    return <Loading />
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
