import { ComponentProps } from "react"

interface Props extends ComponentProps<"button"> {
  children: React.ReactNode
}

export function Button(props: Props) {
  const { children, ...rest } = props

  return <button {...rest}>{children}</button>
}
