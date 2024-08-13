import { useState } from "react"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

interface Props {
  label: string
  value: number
  handleChange: (
    checked: boolean,
    setChecked: (checked: boolean) => void,
    value: number,
  ) => void
}

export function CheckBox(props: Props) {
  const [checked, setChecked] = useState(false)

  return (
    <div
      css={checkboxStyle}
      onClick={() => props.handleChange(checked, setChecked, props.value)}
    >
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
