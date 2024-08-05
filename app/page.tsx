"use client"

import styles from "./page.module.css"
import { CheckBoxList } from "@/components/checkboxList"
import { usePrefecture } from "@/utils/hooks"
import { useState } from "react"
import { Graph } from "@/components/graph"
import { DataTypeSelector } from "@/components/dataTypeSelector"
import { DataType } from "@/types"

export default function Home() {
  const { prefectures, isLoading, error } = usePrefecture()
  const [prefCodes, setPrefCodes] = useState<number[]>([])
  const [dataType, setDataType] = useState<DataType>("総人口")
  console.log(dataType)

  return (
    <main className={styles.main}>
      <div className={styles.graph}>
        <Graph prefCodes={prefCodes} label={dataType} prefectures={prefectures} />
        <div>
          <DataTypeSelector setDataType={setDataType} />
        </div>
      </div>
      <div className={styles.checkboxList}>
        <CheckBoxList
          prefectures={prefectures}
          setPrefCodes={setPrefCodes}
          prefCodes={prefCodes}
        />
      </div>
    </main>
  )
}
