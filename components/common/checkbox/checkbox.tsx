import { useState } from "react"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

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
    <div css={checkboxStyle} onClick={handleChange}>
      <input type="checkbox" checked={checked} readOnly />
      <label css={labelStyle}>{props.label}</label>
    </div>
  )
}

const checkboxStyle = css({
  display: "flex",
  margin: "0 5px",
})

const labelStyle = css({
  width: "max-content",
})
