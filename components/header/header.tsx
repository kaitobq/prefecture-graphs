"use client"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export function Header() {
  return <header css={HeaderContainer}>都道府県別総人口推移グラフ</header>
}

const HeaderContainer = css({
  width: "100vw",
  // maxWidth: "100vw",
  backgroundColor: "#f8d048",
  color: "#343c8f",
  fontWeight: "bold",
  padding: "10px",
  fontSize: "1.5rem",
  position: "fixed",
  top: "0",
})
