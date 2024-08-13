import { Prefecture } from "@/types/prefecture"
import { CheckBox } from "../common/checkbox"

interface Props {
  prefectures: Prefecture[]
  setPrefCodes: (prefCodes: number[]) => void
  prefCodes: number[]
}

export function CheckBoxList(props: Props) {
  const handleChange = (
    checked: boolean,
    setChecked: (checked: boolean) => void,
    value: number,
  ) => {
    const newChecked = !checked
    setChecked(newChecked)

    let newPrefCodes = [...props.prefCodes]
    if (newChecked) {
      newPrefCodes.push(value)
    } else {
      newPrefCodes = newPrefCodes.filter((code) => code !== value)
    }
    props.setPrefCodes(newPrefCodes)
  }

  return (
    <>
      {props.prefectures.map((prefecture) => (
        <CheckBox
          key={prefecture.prefCode}
          label={prefecture.prefName}
          value={prefecture.prefCode}
          handleChange={handleChange}
        />
      ))}
    </>
  )
}
