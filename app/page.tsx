"use client"

import styles from "./page.module.css"
import { CheckBoxList } from "@/components/checkboxList"
import { usePrefecture } from "@/utils/hooks"
import { useState } from "react"
import { Graph } from "@/components/graph"

export default function Home() {
  const { prefectures, isLoading, error } = usePrefecture()
  const [prefCodes, setPrefCodes] = useState<number[]>([])

  return (
    <main className={styles.main}>
      <div className={styles.graph}>
        <Graph prefCodes={prefCodes} label="総人口" prefectures={prefectures} />
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
