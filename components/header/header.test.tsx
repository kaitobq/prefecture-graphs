import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Header } from "./header"

describe("Headerコンポーネントのテスト", () => {
  it("正しくレンダリングされる", () => {
    render(<Header />)
    const headerElement = screen.getByText("都道府県別総人口推移グラフ")
    expect(headerElement).toBeInTheDocument()
  })
})
