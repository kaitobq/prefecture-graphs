import { Button } from "@/components/common/button"
import { DataType } from "@/types"

interface Props {
  setDataType: (dataType: DataType) => void
}

type DataTypes = { children: DataType; value: DataType }[]

const dataTypes: DataTypes = [
  { children: "総人口", value: "総人口" },
  { children: "年少人口", value: "年少人口" },
  { children: "生産年齢人口", value: "生産年齢人口" },
  { children: "老年人口", value: "老年人口" },
]

export function DataTypeSelector(props: Props) {
  return (
    <>
      {dataTypes.map((dataType) => (
        <Button key={dataType.value} onClick={() => props.setDataType(dataType.value)}>
          {dataType.children}
        </Button>
      ))}
    </>
  )
}
