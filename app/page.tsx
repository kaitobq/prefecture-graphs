"use client"

import { CheckBoxList } from "@/components/checkboxList"
import { usePrefecture } from "@/utils/hooks"
import { useEffect, useState } from "react"
import { Graph } from "@/components/graph"
import { DataTypeSelector } from "@/components/dataTypeSelector"
import { DataType } from "@/types"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Loading from "./loading"
import { Header } from "@/components/header"
import { AsyncStringStorage } from "jotai/vanilla/utils/atomWithStorage"
import { initStoreAtoms } from "@/utils/stores/atoms"

export default function Home() {
  const { prefectures, isLoading, error } = usePrefecture()
  const [prefCodes, setPrefCodes] = useState<number[]>([])
  const [dataType, setDataType] = useState<DataType>("総人口")

  const handlePrefChange = (
    checked: boolean,
    setChecked: (checked: boolean) => void,
    value: number,
  ) => {
    const newChecked = !checked
    setChecked(newChecked)

    let newPrefCodes = [...prefCodes]
    if (newChecked) {
      newPrefCodes.push(value)
    } else {
      newPrefCodes = newPrefCodes.filter((code) => code !== value)
    }
    setPrefCodes(newPrefCodes)
  }

  useEffect(() => {
    const localStorageAsync: AsyncStringStorage = {
      getItem: async (key) => localStorage.getItem(key) || null,
      setItem: async (key, value) => localStorage.setItem(key, value),
      removeItem: async (key) => localStorage.removeItem(key),
    }
    initStoreAtoms(localStorageAsync)
  }, [])

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
        <CheckBoxList prefectures={prefectures} handleChange={handlePrefChange} />
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
