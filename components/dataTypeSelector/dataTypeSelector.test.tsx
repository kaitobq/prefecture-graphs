import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import { DataTypeSelector } from "./dataTypeSelector"
import { DataType } from "@/types"

describe("DataTypeSelectorコンポーネントのテスト", () => {
  const setDataTypeMock = jest.fn()
  const currentDType: DataType = "総人口"

  beforeEach(() => {
    setDataTypeMock.mockClear()
  })

  it("すべてのボタンが正しくレンダリングされる", () => {
    render(<DataTypeSelector setDataType={setDataTypeMock} currentDType={currentDType} />)

    const buttons = screen.getAllByRole("button")
    expect(buttons).toHaveLength(4)
    expect(screen.getByText("総人口")).toBeInTheDocument()
    expect(screen.getByText("年少人口")).toBeInTheDocument()
    expect(screen.getByText("生産年齢人口")).toBeInTheDocument()
    expect(screen.getByText("老年人口")).toBeInTheDocument()
  })

  it("クリックするとsetDataTypeが正しく呼び出される", () => {
    render(<DataTypeSelector setDataType={setDataTypeMock} currentDType={currentDType} />)

    const button = screen.getByText("年少人口")
    fireEvent.click(button)

    expect(setDataTypeMock).toHaveBeenCalledWith("年少人口")
  })
})
