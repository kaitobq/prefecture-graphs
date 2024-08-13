import { Prefecture } from "@/types/prefecture"
import { CheckBox } from "../common/checkbox"

interface Props {
  prefectures: Prefecture[]
  handleChange: (
    checked: boolean,
    setChecked: (checked: boolean) => void,
    value: number,
  ) => void
}

export function CheckBoxList(props: Props) {
  return (
    <>
      {props.prefectures.map((prefecture) => (
        <CheckBox
          key={prefecture.prefCode}
          label={prefecture.prefName}
          value={prefecture.prefCode}
          handleChange={props.handleChange}
        />
      ))}
    </>
  )
}
