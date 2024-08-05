import { Prefecture } from "@/types/prefecture"
import { CheckBox } from "../common/checkbox"
import styles from "./checkboxList.module.css"

interface Props {
  prefectures: Prefecture[]
  setPrefCodes: (prefCodes: number[]) => void
  prefCodes: number[]
}

export function CheckBoxList(props: Props) {
  return (
    <>
      {props.prefectures.map((prefecture) => (
        <CheckBox
          key={prefecture.prefCode}
          label={prefecture.prefName}
          value={prefecture.prefCode}
          setPrefCodes={props.setPrefCodes}
          prefCodes={props.prefCodes}
        />
      ))}
    </>
  )
}
