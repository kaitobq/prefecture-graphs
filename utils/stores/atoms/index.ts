import { createJSONStorage } from "jotai/utils"
import * as populationAtoms from "./popultation"
import { AsyncStringStorage } from "jotai/vanilla/utils/atomWithStorage"

export let atoms: ReturnType<typeof init>

export function initStoreAtoms(storage: AsyncStringStorage) {
  atoms = init(storage)
}

function init(storage: AsyncStringStorage) {
  const st = createJSONStorage<any>(() => storage)

  const population = populationAtoms.setUp(st)

  return {
    population,
  }
}
