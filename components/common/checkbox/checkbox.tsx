import { useState } from "react"
import styles from "./chekbox.module.css"

interface Props {
  label: string
  value: number
  setPrefCodes: (prefCodes: number[]) => void
  prefCodes: number[]
}

export function CheckBox(props: Props) {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    const newChecked = !checked
    setChecked(newChecked)

    let newPrefCodes = [...props.prefCodes]
    if (newChecked) {
      newPrefCodes.push(props.value)
    } else {
      newPrefCodes = newPrefCodes.filter((code) => code !== props.value)
    }
    props.setPrefCodes(newPrefCodes)
  }

  return (
    <div className={styles.checkbox}>
      <label className={styles.label}>{props.label}</label>
      <input type="checkbox" onChange={handleChange} />
    </div>
  )
}
