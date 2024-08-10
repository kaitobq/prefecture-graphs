import { useAtom } from "jotai"
import { atoms } from "./atoms"

export const populationStore = {
  usePrefecturePopulations() {
    return useAtom(atoms.population.prefecturePopolations)
  },
}
