import { ComponentProps } from "react"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

interface Props extends ComponentProps<"button"> {
  children: React.ReactNode
}

export function Button(props: Props) {
  const { children, ...rest } = props

  return (
    <button css={BtnStyle} {...rest}>
      {children}
    </button>
  )
}

const BtnStyle = css({
  padding: "5px 10px",
})
