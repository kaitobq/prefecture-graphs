import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { CheckBoxList } from "./checkboxList"

describe("CheckboxListコンポーネントのテスト", () => {
  const prefectures = [
    { prefCode: 1, prefName: "pref" },
    { prefCode: 2, prefName: "pref" },
    { prefCode: 3, prefName: "pref" },
  ]
  const handleChange = jest.fn()
  it("正しくレンダリングされる", () => {
    render(<CheckBoxList prefectures={prefectures} handleChange={handleChange} />)
    const checkBoxList = screen.getAllByText("pref")
    expect(checkBoxList).toHaveLength(3)
  })
})
