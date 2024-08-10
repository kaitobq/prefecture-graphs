import { PrefecturePopulation } from "@/types"
import { atom } from "jotai"
import { AsyncStorage } from "jotai/vanilla/utils/atomWithStorage"

export function setUp(st: AsyncStorage<any>) {
  const atomPrefecturePopulations = atom<PrefecturePopulation[]>([])

  return {
    prefecturePopolations: atomPrefecturePopulations,
  }
}
