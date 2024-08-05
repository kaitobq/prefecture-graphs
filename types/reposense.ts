import { Prefecture } from "./prefecture"

export type PrefectureResponse = {
  message: string | null
  result: Prefecture[]
}

type result = {
  boundaryYear: number
  data: {
    label: string
    data: {
      year: number
      value: number
    }[]
  }[]
}

export type PopulationCompositionResponse = {
  message: string | null
  result: result
}
