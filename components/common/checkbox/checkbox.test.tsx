import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { CheckBox } from "./checkbox"

describe("Checkboxコンポーネントのテスト", () => {
  it("正しくレンダリングされる", () => {
    render(<CheckBox label="test" value={1} handleChange={() => {}} />)
    const divElement = screen.getByText("test").parentElement
    expect(divElement).toBeInTheDocument()
  })

  it("初期状態でチェックボックスが未選択状態である", () => {
    render(<CheckBox label="test" value={1} handleChange={() => {}} />)
    const inputElement = screen.getByRole("checkbox")
    expect(inputElement).not.toBeChecked()
  })

  it("divタグのクリック時にhandleChangeが発火し、チェックボックスが選択状態になる", () => {
    const handleChange = jest.fn((checked, setChecked) => setChecked(!checked))
    render(<CheckBox label="test" value={1} handleChange={handleChange} />)
    const divElement = screen.getByText("test").parentElement
    const inputElement = screen.getByRole("checkbox")
    fireEvent.click(divElement!)
    expect(inputElement).toBeChecked()
    expect(handleChange).toHaveBeenCalled()
  })

  it("選択状態のチェックボックスをクリックすると非選択状態になる", () => {
    const handleChange = jest.fn((checked, setChecked) => setChecked(!checked))
    render(<CheckBox label="test" value={1} handleChange={handleChange} />)
    const divElement = screen.getByText("test").parentElement
    const inputElement = screen.getByRole("checkbox")
    fireEvent.click(divElement!)
    expect(inputElement).toBeChecked()
    fireEvent.click(divElement!)
    expect(inputElement).not.toBeChecked()
    expect(handleChange).toHaveBeenCalledTimes(2)
  })
})
