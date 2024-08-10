import { Button } from "@/components/common/button"
import { DataType } from "@/types"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

interface Props {
  setDataType: (dataType: DataType) => void
  currentDType: DataType
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
    <div css={DataTypeSelectorStyle}>
      {dataTypes.map((dataType) => (
        <Button
          css={BtnStyle(dataType.value === props.currentDType)}
          key={dataType.value}
          onClick={() => props.setDataType(dataType.value)}
        >
          {dataType.children}
        </Button>
      ))}
    </div>
  )
}

const DataTypeSelectorStyle = css({
  display: "flex",
  justifyContent: "space-around",
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  height: "10%",
})

const BtnStyle = (isActive: boolean) =>
  css({
    width: "100%",
    backgroundColor: isActive ? "#f8d048" : "#343c8f",
    color: isActive ? "#343c8f" : "#f8d048",
    fontSize: "18px",
    fontWeight: "bold",
    borderTop: "1px solid #343c8f",
    borderRight: "1px solid #343c8f",
    transition: "0.3s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: isActive ? "#f7c33a" : "#2e366e",
      color: isActive ? "#2e366e" : "#f7c33a",
    },
  })
