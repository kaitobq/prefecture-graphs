"use client"

import { CheckBoxList } from "@/components/checkboxList"
import { usePrefecture } from "@/utils/hooks"
import { useState } from "react"
import { Graph } from "@/components/graph"
import { DataTypeSelector } from "@/components/dataTypeSelector"
import { DataType } from "@/types"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Loading from "./loading"
import { Header } from "@/components/header"

export default function Home() {
  const { prefectures, isLoading, error } = usePrefecture()
  const [prefCodes, setPrefCodes] = useState<number[]>([])
  const [dataType, setDataType] = useState<DataType>("総人口")

  if (isLoading) {
    return <Loading />
  }

  return (
    <div css={ContainerStyle}>
      <Header />
      <div>
        <Graph prefCodes={prefCodes} label={dataType} prefectures={prefectures} />
        <DataTypeSelector setDataType={setDataType} currentDType={dataType} />
      </div>
      <div css={CheckBoxListStyle}>
        <CheckBoxList
          prefectures={prefectures}
          setPrefCodes={setPrefCodes}
          prefCodes={prefCodes}
        />
      </div>
    </div>
  )
}

const ContainerStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
})

const CheckBoxListStyle = css({
  marginTop: "10px",
  padding: "20px",
  display: "flex",
  overflowX: "scroll",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "inset 5px 10px 15px rgba(0,0,0,.05), inset -5px -10px 15px rgba(0,0,0,.05)",
})
