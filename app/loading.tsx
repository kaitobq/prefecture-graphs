"use client"
import React from "react"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function Loading() {
  return (
    <div css={loadingContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="200"
        height="200"
        style={{ shapeRendering: "auto", display: "block", background: "transparent" }}
      >
        <g>
          <circle strokeWidth="2" stroke="#f8d048" fill="none" r="0" cy="50" cx="50">
            <animate
              begin="0s"
              calcMode="spline"
              keySplines="0 0.2 0.8 1"
              keyTimes="0;1"
              values="0;50"
              dur="1.9607843137254901s"
              repeatCount="indefinite"
              attributeName="r"
            ></animate>
            <animate
              begin="0s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              keyTimes="0;1"
              values="1;0"
              dur="1.9607843137254901s"
              repeatCount="indefinite"
              attributeName="opacity"
            ></animate>
          </circle>
          <circle strokeWidth="2" stroke="#60b5ae" fill="none" r="0" cy="50" cx="50">
            <animate
              begin="-0.9803921568627451s"
              calcMode="spline"
              keySplines="0 0.2 0.8 1"
              keyTimes="0;1"
              values="0;50"
              dur="1.9607843137254901s"
              repeatCount="indefinite"
              attributeName="r"
            ></animate>
            <animate
              begin="-0.9803921568627451s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              keyTimes="0;1"
              values="1;0"
              dur="1.9607843137254901s"
              repeatCount="indefinite"
              attributeName="opacity"
            ></animate>
          </circle>
          <text
            css={text}
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#000"
          >
            Loading...
          </text>
        </g>
        <g></g>
      </svg>
    </div>
  )
}

const loadingContainer = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
})

const text = css({
  fontSize: "10px",
  color: "#23314d",
})
